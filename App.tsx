/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
import type {PropsWithChildren} from 'react';

import { NavigationContainer} from '@react-navigation/native';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Redo2Screen from './android/app/src/screenFolder/Redo2Screen';
import Redo3Screen from './android/app/src/screenFolder/Redo3Screen';
import RedoScreen from './android/app/src/screenFolder/RedoScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Redo4ScreenPractice from './android/app/src/screenFolder/Redo4ScreenPractice';
import MainButtonScreen from './android/app/src/screenFolder/MainButtonScreen';
import MainBtnScreen3 from './android/app/src/screenFolder/MainBtnScreen3';
import MainbtnScreen4 from './android/app/src/screenFolder/MainbtnScreen4';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// connect screen
const Stack = createNativeStackNavigator();
export const screen = {
  redoScreen: 'RedoScreen',
  redo2Screen: 'Redo2Screen',
  redo3Screen: 'Redo3Screen',
  redo4ScreenPractice: 'Redo4ScreenPractice',
  mainButtonScreen: 'MainButtonScreen',
  mainBtnScreen3: 'MainBtnScreen3',
  mainbtnScreen4: ' MainbtnScreen4'
}

function App({navigation}: any): React.JSX.Element {
  
  return (
 //step 1 go to https://reactnavigation.org/docs/getting-started and --install npm install @react-navigation/native
   //step 2--install dependenciies bare - npm install react-native-screens react-native-safe-area-context
   //step 3- npx pod-install ios
   //step 4 - go to android> src> main> mainactivity.kt> 
   // and put  - override fun onCreate(savedInstanceState: Bundle?) { super.onCreate(null)}
   //and put on top of acitivity.kt --import android.os.Bundle;
//step5- npm install @react-navigation/native-stack
//step 6 - npm install @react-navigation/elements
 //step7- crate stack line 37 
 
 // connect screen

    <NavigationContainer>
          <Stack.Navigator initialRouteName={screen.mainbtnScreen4}>
          {/*options={{headerShown:false}} if donot want header on the screen*/}
          <Stack.Screen name={screen.redoScreen} component={RedoScreen} />
            <Stack.Screen name={screen.redo2Screen} component={Redo2Screen} options={{headerShown:false}}/>
            {/* options={{headerShown:false} this show header on the screen*/}
            <Stack.Screen name={screen.redo3Screen} component={Redo3Screen} />
            <Stack.Screen name={screen.redo4ScreenPractice} component={Redo4ScreenPractice} />
            <Stack.Screen name={screen.mainButtonScreen} component={MainButtonScreen} />
            <Stack.Screen name={screen.mainBtnScreen3} component={MainBtnScreen3} />
            <Stack.Screen name={screen.mainbtnScreen4} component={MainbtnScreen4} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  oneBoxStyle: {
    backgroundColor: 'lightgreen',
    padding: 15,
    flexDirection: 'row',
    gap: 6,
  },
  wrapperStyle: {
    flexDirection: 'row',
    gap: 2,
    justifyContent: 'space-between',
  },
  changeColorAfterSelect: {
    backgroundColor: 'orange',
  },
  buttonStyle: {
    padding: 20,
    backgroundColor: 'orange',
    width: '50%',
    margin: 'auto',
  },
  
});

export default App;
