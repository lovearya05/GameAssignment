/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import {Colors,} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, } from '@react-navigation/native';
import StackNavigator from './src/navigator/Navigator';
import { Provider } from 'react-redux';
import store from './src/redux/store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.safeAreaStyle} >
            <StackNavigator />
          </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
const styles = StyleSheet.create({
  safeAreaStyle: { flex: 1, }
})


