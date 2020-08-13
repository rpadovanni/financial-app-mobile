import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// ROUTES
import Routes from './src/routes/routes';

const App = () => {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
};

export default App;
