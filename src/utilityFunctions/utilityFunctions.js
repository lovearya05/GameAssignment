import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const showToast = (text='')=>{
    Toast.show(text);

}
export const getIn2Digit =(txt='')=> `${txt}`.padStart(2,0)
export const fixedToPoint=(txt='', point=1) => parseFloat(txt).toFixed(point)

export const saveDataToLocalStorage = async (key='', data={}) => {
    try{
       await AsyncStorage.setItem(key, JSON.stringify(data));
    }catch(e){
        console.log(e)
    }
}
export const getDataFromLocalStorage = async (key='') => {
    return new Promise(async (resolve, reject) => {
        try {
         const data = await AsyncStorage.getItem(key);
         if(data) resolve(JSON.parse(data))
         else resolve(null)
    } catch (e) {
            resolve(null)
            console.log(e)
        }
    })
}