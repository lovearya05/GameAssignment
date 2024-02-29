import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { textBlk } from '../../styleSheet/textStyles'
import baseStyles from '../../styleSheet/baseStyleSheet'
import { useSelector } from 'react-redux'
import { getDataFromLocalStorage, getIn2Digit } from '../../utilityFunctions/utilityFunctions'
import { useIsFocused } from '@react-navigation/native'

const GameHistory = () => {
    const [previousScores, setPreviousScores] = useState([])
    const user = useSelector(state=>state?.appData?.user)
    const isFocused = useIsFocused()

    const updatePreviousScores = async ()=>{
        const previousScores = await getDataFromLocalStorage(user?.email)
        if(previousScores) setPreviousScores(previousScores)
    }

    useEffect(()=>{
        updatePreviousScores()
    },[isFocused])

    return (
        <View  >
            <View style={{ height: 100, backgroundColor: 'rgba(74, 133, 199, 1)', paddingHorizontal: 16 }} >
                <View style={[baseStyles.flxRowSpcBtwn, { paddingVertical: 16, justifyContent:'center', alignItems:'center' }]} >
                    <Text style={[textBlk(16,500), {}]} >Game History</Text>
                </View>
            </View>

            <FlatList
                data={previousScores}
                renderItem={({item, index})=>{
                    console.log(item)
                    const isUserWin = item?.isUserWin
                    const dateString = new Date()
                    const dateTime = getIn2Digit(dateString.getMonth()) + '-' + getIn2Digit(dateString.getDate()) + '-' + dateString.getFullYear() + ' ' + dateString.getHours() + ':' + dateString.getMinutes()

                    return <View style={{paddingVertical:8, paddingHorizontal:16, backgroundColor: index%2 ==0 ? 'rgba(0, 0, 0, 0)' :'rgba(0, 0, 0, 0.1)' }} >
                        <View style={[baseStyles.flxRowSpcBtwn]} > 
                            <Text  style={[textBlk(12,400)]}>Your setUserMoves: {item?.userMoves}</Text>
                            <Text  style={[textBlk(12,400)]}>AI Moves: {item?.aiMoves} </Text>
                        </View>
                        <View style={[baseStyles.flxRowSpcBtwn]}  >
                            <Text style={[textBlk(12,400),{color:isUserWin ? 'green' : 'red'}]} >{isUserWin ? 'You Win' : 'You Lose'}</Text>
                            <Text style={[textBlk(12,400)]}>{dateTime}</Text>
                        </View>
                    </View>

                }}
            />
        </View>
    )
}

export default GameHistory