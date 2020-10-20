import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useFonts, Nunito_700Bold} from '@expo-google-fonts/nunito';
import {AppLoading} from 'expo'


import Routes from './src/routes/index'


export default function App() {

  let [fontsLoaded] = useFonts({
    Nunito_700Bold
  });
  
  if(!fontsLoaded){
    return <AppLoading/>;
  }else{
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  }
  
}


