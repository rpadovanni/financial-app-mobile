import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

// CONTEXTS
import { useAuth } from '../../contexts/auth.context';
import Input from '../../components/ui/Input';
import { IUserCredentials } from '../../interfaces/IUser';

// SIGN IN COMPONENT
const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('test@test.com');
    const [password, setPassword] = useState<string>('test');

    const { signIn, errorMessage } = useAuth();

    const handleSignIn = () => {
        const userCredentials: IUserCredentials = {
            email,
            password,
        };
        console.log(userCredentials);
        signIn(userCredentials);
    };

    return (
        <View style={styles.container}>
            <Text>Sing In Page!</Text>
            <Input
                blurOnSubmit
                autoCapitalize='none'
                autoCorrect={false}
                maxLength={100}
                onChangeText={email => setEmail(email)}
                value={email}
            />
            <Input
                blurOnSubmit
                autoCapitalize='none'
                autoCorrect={false}
                maxLength={100}
                onChangeText={password => setPassword(password)}
                value={password}
            />
            <Button title='Sign In Button' onPress={handleSignIn} />
            {errorMessage && <Text>{errorMessage}</Text>}
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
