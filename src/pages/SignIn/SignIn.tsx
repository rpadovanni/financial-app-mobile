import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

// CONTEXTS
import { useAuth } from '../../contexts/auth.context';

// SIGN IN COMPONENT
const SignIn: React.FC = () => {
    const { signIn } = useAuth();

    const handleSignIn = () => {
        signIn();
    };

    return (
        <View style={styles.container}>
            <Text>Sing In Page!</Text>
            <Button title='Sign In Button' onPress={handleSignIn} />
        </View>
    );
};

// STYLES
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SignIn;
