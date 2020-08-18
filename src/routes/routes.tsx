import React from 'react';

// ROUTES
import AuthRoutes from './auth.routes';
import { useAuth } from '../contexts/auth.context';
import AppRoutes from './app.routes';
import { View, ActivityIndicator } from 'react-native';

const Routes: React.FC = () => {
    const { isLogged, isLoading } = useAuth();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color='#666' />
            </View>
        );
    }

    if (isLogged) {
        return <AppRoutes />;
    }

    return <AuthRoutes />;
};

export default Routes;
