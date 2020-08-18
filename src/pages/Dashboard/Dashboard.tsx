import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';

// CONTEXTS
import { AuthContext } from '../../contexts/auth.context';

const Dashboard: React.FC = () => {
    const { signOut } = useContext(AuthContext);

    const handleSignOut = () => {
        signOut();
    };

    return (
        <View style={styles.container}>
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
