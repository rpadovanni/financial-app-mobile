import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

// CONTEXTS
import { useAuth } from '../../contexts/auth.context';

const Dashboard: React.FC = () => {
    const { user, signOut } = useAuth();

    const handleSignOut = () => {
        signOut();
    };

    return (
        <View style={styles.container}>
            <Text>{user?.name}</Text>
            <Button title='Sign Out Button' onPress={handleSignOut} />
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

export default Dashboard;
