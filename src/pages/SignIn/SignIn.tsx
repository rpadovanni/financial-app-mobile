import React, { useContext } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

// CONTEXTS
import { AuthContext } from '../../contexts/auth.context';

// SIGN IN COMPONENT
const SignIn: React.FC = () => {
    const { isLogged, user, signIn } = useContext(AuthContext);

    const handleSignIn = () => {
        signIn();
    };

    const text = isLogged ? 'is logged' : 'is NOT logged';

    return (
        <View style={styles.container}>
            <Text>Sing In Page!</Text>
            <Text>{text}</Text>
            <Text>{user?.name}</Text>
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
