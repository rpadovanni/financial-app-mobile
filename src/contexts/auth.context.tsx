import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import { IUser } from '../interfaces/IUser';
import api from '../services/api';

interface IAuthContext {
    isLogged: boolean;
    user: IUser | null;
    isLoading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadStoredData = async () => {
            const storedUser = await AsyncStorage.getItem('@FinancialApp:user');
            const storedToken = await AsyncStorage.getItem('@FinancialApp:token');

            if (storedUser && storedToken) {
                api.defaults.headers.authorization = `Bearer ${storedToken}`;

                setUser(JSON.parse(storedUser));
            }

            setIsLoading(false);
        };

        loadStoredData();
    }, []);

    const signIn = async () => {
        const response = await auth.signIn();

        setUser(response.user);

        api.defaults.headers.authorization = `Bearer ${response.token}`;

        await AsyncStorage.setItem('@FinancialApp:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@FinancialApp:token', response.token);
    };

    const signOut = async () => {
        await AsyncStorage.clear();
        api.defaults.headers.authorization = '';

        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isLogged: !!user, user, isLoading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export { useAuth, AuthProvider as default };
