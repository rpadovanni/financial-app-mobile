import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// PROVIDERS
import AuthProvider from './src/contexts/auth.context';

// ROUTES
import Routes from './src/routes/routes';

const App = () => {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    );
};

export default App;
