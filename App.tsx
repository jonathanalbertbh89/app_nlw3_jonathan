import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useFonts, Nunito_700Bold, Nunito_600SemiBold, Nunito_800ExtraBold} from '@expo-google-fonts/nunito';
import {AppLoading} from 'expo'


import Routes from './src/routes/index'


export default function App() {

  let [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_600SemiBold,
    Nunito_800ExtraBold

  });
  
  if(!fontsLoaded){
    return <AppLoading/>;
  }else{
    return(

      <NavigationContainer>
        <Routes/>
        <StatusBar/>
      </NavigationContainer>

    )
    
  }
  
}


