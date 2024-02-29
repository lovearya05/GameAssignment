import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { textwhite } from '../styleSheet/textStyles'

const GreenButton = ({ text = '', onPress = () => { } }) => {
    return (
        <View style={{ paddingVertical: 16, marginRight: 8 }} >
            <TouchableOpacity onPress={ onPress}
                style={[styles.buttonStyle]} >
                <Text style={[textwhite(14,500),{opacity: 1}]} >{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GreenButton

const styles = StyleSheet.create({
    buttonStyle: [{
        width:'100%',
        alignItems:'center',
         paddingVertical: 12,
        alignSelf: 'flex-start', borderRadius: 10,
        paddingHorizontal: 16, backgroundColor:'rgba(0, 149, 95, 1)'
    }]
})
