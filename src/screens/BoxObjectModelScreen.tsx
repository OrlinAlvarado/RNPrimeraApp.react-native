import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Box Object Model</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1
    },
    title: {
        paddingHorizontal: 100,
        paddingVertical: 20,
        fontSize: 20,
        borderWidth: 5,
        marginHorizontal: 20
        
        // backgroundColor: 'red'
    }
});
