
import 'react-native-gesture-handler'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login/Login';
import { useSelector } from 'react-redux';
import GameScreen from '../screens/GameScreen/GameScreen';
import GameHistory from '../screens/History/GameHistory';



const StackNavigator = () => {
    const Stack = createNativeStackNavigator()
    const appData = useSelector(state => state?.appData)
    const isLoggedIn = appData?.user

    return isLoggedIn ? 
    <Stack.Navigator screenOptions={{ headerShown:false,}} initialRouteName='GameScreen'>

      <Stack.Screen name='GameScreen' component={GameScreen} options={{}} />
      <Stack.Screen name='GameHistory' component={GameHistory} options={{}} />

    </Stack.Navigator>
    :
    <Stack.Navigator screenOptions={{ headerShown:false, }} initialRouteName='Login'>

      <Stack.Screen name='Login' component={Login} options={{}} />

    </Stack.Navigator> 
    
  }
export default StackNavigator