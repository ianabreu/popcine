import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

export default function FormInput(props) {
    return (
        <>
            <Text
            style={styles.label}>{props.label}:
            </Text>

            <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            placeholderTextColor='#ABABAB'
            secureTextEntry={props.type === 'password'}
            keyboardType={props.type === 'email' ? 'email-address' : ''}
            onChangeText={props.onChangeText}
            value={props.value}
            />
        </>
    );
}

const styles = StyleSheet.create({
    label: {
        color: '#FFF',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: '100'
        
    },
    input: {
        backgroundColor: '#282D28',
        color: '#FFF',
        fontSize: 18,
        borderRadius: 10,
        height: 45,
        padding: 10,
        marginBottom: 20,

    }
})