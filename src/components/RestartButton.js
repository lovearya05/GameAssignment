import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { textBlk } from '../styleSheet/textStyles'

const RestartButton = ({onPress=()=>{},text='Restart Game' }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle]} >
      <Text style={[textBlk(12,500)]} >{text}</Text>
    </TouchableOpacity>
  )
}

export default RestartButton

const styles = StyleSheet.create({
  buttonStyle :{borderColor:'#000', borderWidth:1,alignSelf:'flex-start', borderRadius:16, paddingVertical:6,paddingHorizontal:12, marginRight:8, marginVertical:8}
})