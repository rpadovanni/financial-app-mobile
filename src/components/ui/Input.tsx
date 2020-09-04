import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';

interface IInputProps extends TextInputProps {
    style?: object;
}

const Input = (props: IInputProps) => {
    return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'grey',
        borderWidth: 1,
        width: '90%',
        fontSize: 16,
        marginVertical: 10,
        padding: 5,
    },
});

export default Input;
