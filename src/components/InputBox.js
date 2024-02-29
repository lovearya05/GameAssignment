import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const InputBox = ({ placeholderText = '', value = '', setValue = () => { }, isPassword = false,  }) => {
    return (
        <View style={{ marginVertical: 4, }} >
            <TextInput
                placeholderTextColor={'rgba(207, 204, 204, 0.5)'}
                placeholder={placeholderText}
                value={value}
                secureTextEntry={isPassword}
                onChangeText={(txt) => setValue(txt)}
                style={[styles.inputStyle]} />
        </View>
    )
}

export default InputBox

const styles = StyleSheet.create({
    inputStyle: {
        color: '#fff',
        fontSize: 14,
        height: 40,
        paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, borderColor:  'rgba(131, 131, 131, 1)', width: '100%', borderWidth: 1
    }
})