import React, { createContext, useState } from 'react';
import * as auth from '../services/auth';
import { IUser } from '../interfaces/IUser';

interface IAuthContext {
    isLogged: boolean;
    user: IUser | null;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);

    const signIn = async () => {
        const response = await auth.signIn();

        setUser(response.user);
    };

    const signOut = async () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isLogged: !!user, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider as default };
