import React, { useContext } from 'react';

// ROUTES
import AuthRoutes from './auth.routes';
import { AuthContext } from '../contexts/auth.context';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
    const { isLogged } = useContext(AuthContext);

    if (isLogged) {
        return <AppRoutes />;
    }

    return <AuthRoutes />;
};

export default Routes;
