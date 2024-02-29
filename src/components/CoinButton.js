import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import baseStyles from '../styleSheet/baseStyleSheet'
import { textBlk } from '../styleSheet/textStyles'

const CoinButton = ({text=0, onPress=()=>{} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{borderColor:'rgba(246, 114, 65, 1)', borderWidth:1,alignSelf:'flex-start', borderRadius:16, paddingVertical:6,paddingHorizontal:12, marginHorizontal:12, marginVertical:8}]} >
      <Text style={[textBlk(12,500)]} >{text}</Text>
    </TouchableOpacity>
  )
}

export default CoinButton

