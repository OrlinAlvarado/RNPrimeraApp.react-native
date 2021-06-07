import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const Tarea6Screen = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.cajaMorada } />
            <View style={ styles.cajaNaranja } />
            <View style={ styles.cajaAzul } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
    },
    cajaMorada: {
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        flex: 2
    },
    cajaNaranja: {
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23b',
        flex: 2
    },
    cajaAzul: {
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        flex: 4
    },
    
});
