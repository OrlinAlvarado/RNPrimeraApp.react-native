import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native';

interface Props {
    title: string,
    position?: 'bottomRight' | 'bottomLeft'
    onPress: () => void,
}

export const Fab = ({ title, onPress, position = 'bottomRight'  }: Props) => {
    
    const ios = () => (
        <TouchableOpacity
            onPress={ onPress }
            activeOpacity={ 0.8 }
            style={[ 
                styles.fabLocation,
                (position === 'bottomLeft') ? styles.left : styles.right
            ]}
        >
            <View style={ styles.fab }>
                <Text style={ styles.fabText }>{ title }</Text>
            </View>
        </TouchableOpacity>
    )
    
    const android = () => (
        <View
            style={[ 
                styles.fabLocation,
                (position === 'bottomLeft') ? styles.left : styles.right,
            ]}
        >
            <TouchableNativeFeedback
                onPress={ onPress }
                background={ TouchableNativeFeedback.Ripple('black', false, 30)}
                style={{ borderRadius: 100 }}
            >
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }>{ title }</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
    
    return (Platform.OS === 'ios') ? android() : ios();
    
}


const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})