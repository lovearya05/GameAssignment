import { View, Text, ScrollView, Dimensions, TouchableOpacity, SafeAreaView, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { textBlk, textwhite } from '../../styleSheet/textStyles'
import { useSelector, useDispatch } from 'react-redux';
import { increment, setUser, setUserData } from '../../redux/slicer'
import { saveDataToLocalStorage, showToast } from '../../utilityFunctions/utilityFunctions'
import { useNavigation } from '@react-navigation/native'
import InputView from '../../components/InputView'
import GreenButton from '../../components/GreenButton';
import { checkIsValidUser } from '../../utilityFunctions/handleLogin';

const Login = ({  }) => {
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()

    const handleForgotPassword = () => {}
    const value = useSelector(state => state?.appData)
    console.log('value-->', value)

    const handleLogin = async () => {
        if (!inputEmail){
            showToast('Please enter valid email')
        } else if (!inputPassword) {
            showToast('Please enter valid password')
        } else {
            const isValidUser = await checkIsValidUser(inputEmail, inputPassword);
            if(isValidUser){
                // handle login and save user state
                dispatch(setUser({email : inputEmail}))
                setInputEmail('')
                setInputPassword('')
            }else{
                showToast('Invalid credentials')
            }
        }
    }

    return (
            // <SplashBackground makeDark>
                <View style={{ height: '100%', backgroundColor:'rgba(0, 0, 0, 0.9)' }} >

                    <ScrollView >
                        <View style={{ marginTop: '20%', paddingHorizontal: 16 }} >
                            <Text>
                                <Text style={[textwhite(24, 600)]} >Welcome Back</Text>
                            </Text>

                            <View style={{ marginTop: 80 }} >
                                <InputView inputTitle='Email' placeholderText='abc@gmail.com' value={inputEmail} setValue={setInputEmail} />
                                <InputView inputTitle='Password' placeholderText='******' value={inputPassword} setValue={setInputPassword} isPassword />
                            </View>
                            <View>
                                <Text onPress={handleForgotPassword} style={[textwhite(12, 400), { color: 'rgba(248, 94, 0, 1)' }]} >I forgot my password.</Text>
                            </View>

                            <GreenButton text='Login' onPress={handleLogin} isDisabled={isLoading} />

                        </View>
                    </ScrollView  >

                </View>
            // </SplashBackground>
    )
}

export default Login