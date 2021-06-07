import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.cajaVerde }/>
             <View style={ styles.cajaMorada }/>
             <View style={ styles.cajaNaranja }/>
                
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28c4d9',
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856d6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 10,
        right: 10
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#f0a23b',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    cajaVerde: {
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // top: 0,
        // right: 0
        ...StyleSheet.absoluteFillObject
    },
});