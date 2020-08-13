import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

// SERVICES
import signIn from '../../services/auth';

const SignIn: React.FC = () => {
    const handleSignIn = async () => {
        const response = await signIn();
        console.log(response);
    }

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
