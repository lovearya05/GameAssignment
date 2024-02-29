import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { getDataFromLocalStorage, saveDataToLocalStorage, showToast } from '../../utilityFunctions/utilityFunctions';
import baseStyles from '../../styleSheet/baseStyleSheet';
import { textBlk } from '../../styleSheet/textStyles';
import CoinButton from '../../components/CoinButton';
import RestartButton from '../../components/RestartButton';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const GameScreen = () => {
    const [totalCoinsLeft, setTotalCoinsLeft] = useState(21);
    const [userPickCoin, setUserPickCoin] = useState(0);
    const [isUserTurn, setIsUserTurn] = useState(true);
    const [userMoves, setUserMoves] = useState(0);
    const [aiMoves, serAiMoves] = useState(0);

    const user = useSelector(state=>state?.appData?.user)
    const navigation = useNavigation()

    const handleViewHistory = ()=>navigation.navigate('GameHistory')

    const handldeRestartGame =()=>{
        setTotalCoinsLeft(21);
        setUserPickCoin(0);
        setUserMoves(0)
        serAiMoves(0)
        setIsUserTurn(true);
    }

    const handleUserCoinSelect = (coinsSelected=0) => {
        setIsUserTurn(false)
        setUserPickCoin(coinsSelected)
        handleTurn(coinsSelected)
    }

    const handleTurn = (userSelectedCoins=0) => {
        let totalCoins = totalCoinsLeft;

        let playerChoice = parseInt(userSelectedCoins);

        if (isNaN(playerChoice) || playerChoice < 1 || playerChoice > 4 || playerChoice > totalCoins) {
            showToast("Invalid choice. Please pick again.");
            return
        }

        totalCoins -= playerChoice;
        setUserMoves(p=>p+1)
        console.log(`Player picked ${playerChoice} coin(s). Coins left: ${totalCoins}`);

        if (totalCoins <= 0) {
            showToast("You loses! AI wins!");
            setTotalCoinsLeft(totalCoins)
            handleSaveScore(false)
            return
        }

        let aiChoice = 5 - playerChoice;

        setTimeout(()=>{
            totalCoins -= aiChoice;
            console.log(`AI picked ${aiChoice} coin(s). Coins left: ${totalCoins}`);
    
            if (totalCoins <= 0) {
                showToast("AI loses! Player wins!");
                handleSaveScore(true)
                return
            }
            setTotalCoinsLeft(totalCoins)
            serAiMoves(p=>p+1)
            setIsUserTurn(true)
        },1000)
    }

    const handleSaveScore = async (isUserWin)=>{
        const scores = {
            dateTime : new Date(),
            userMoves : userMoves,
            aiMoves : aiMoves,
            isUserWin : isUserWin
        }
        const previousScores = await getDataFromLocalStorage(user?.email)
        const newScores = previousScores ? [...previousScores, scores] : [scores]
        saveDataToLocalStorage(user?.email, newScores)

        console.log('previousScores - - -', previousScores)

    }

    return (
        <View style={[styles.mainContainer]} >

            <View style={styles.topView} >
                <View style={[baseStyles.flxRowSpcBtwn, { paddingVertical:8}]} >  
                    <Text style={[textBlk(14, 600)]} >Your Moves : {userMoves}</Text>
                    <Text style={[textBlk(14, 600)]} >Coins Left : {totalCoinsLeft}</Text>
                </View>

                <View style={[baseStyles.flxRowSpcBtwn, { paddingVertical:4}]}>
                    <RestartButton text='Restart Game' onPress={handldeRestartGame} />
                    <RestartButton text='History' onPress={handleViewHistory} />
                </View>
            </View>

            <View style={{flexDirection:'row', flexWrap:'wrap', paddingHorizontal:24,}} >
                {
                    [...new Array(totalCoinsLeft)].map((_,i)=>{
                        return(
                            <View key={i} >
                                <Image
                                style={{height:44, width:44, margin:8}}
                                source={require('../../assets/coin.png')}
                                />
                            </View>
                        )
                    })
                }
            </View>

            <View style={styles.bottomView} >
                <Text style={[textBlk(14, 500),{paddingVertical:8}]} >{(isUserTurn && totalCoinsLeft>0) ? 'Your Turn Pick Coins' : (totalCoinsLeft>0 ? 'Please wait other user is playing' : '')}</Text>

                {isUserTurn && <View style={{flexDirection:'row',}} >
                    {[0,0,0,0].map((_,i)=>{
                        if(i+1 <= totalCoinsLeft){
                            return <CoinButton key={i} text={i+1} onPress={()=>handleUserCoinSelect(parseInt(i+1))} />
                        }
                    })}
                </View>}

            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    mainContainer : {flexDirection:'column', justifyContent:'space-between', flex:1},
    topView:{height:100, backgroundColor:'rgba(74, 133, 199, 1)', paddingHorizontal:16},
    bottomView : {backgroundColor:'rgba(242, 184, 41, 1)', height:130, paddingVertical:8, paddingHorizontal:16, justifyContent:'center', alignItems:'center'}

})