import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';
import { IUser, IUserCredentials } from '../interfaces/IUser';
import api from '../services/api';

interface IAuthContext {
    errorMessage: string | undefined;
    isLoading: boolean;
    isLogged: boolean;
    signIn(userCredentials: IUserCredentials): Promise<void>;
    signOut(): void;
    user: IUser | null;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState();

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

    const signIn = async (userCredentials: IUserCredentials) => {
        // TODO: Move logic to service
        try {
            const response = await api.post('/authenticate', userCredentials);

            const { user, token } = response.data;
            setUser(user);

            api.defaults.headers.authorization = `Bearer ${token}`;

            await AsyncStorage.setItem('@FinancialApp:user', JSON.stringify(user));
            await AsyncStorage.setItem('@FinancialApp:token', token);
        } catch (err) {
            setErrorMessage(err.response.data.message);
        }
    };

    const signOut = async () => {
        await AsyncStorage.clear();
        api.defaults.headers.authorization = '';

        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                errorMessage,
                isLoading,
                isLogged: !!user,
                signIn,
                signOut,
                user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export { useAuth, AuthProvider as default };
