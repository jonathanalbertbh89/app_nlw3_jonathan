import React from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

import style from './style';
import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import { useNavigation } from '@react-navigation/core';

interface HeaderProps{
    title: string,
    showCancel?: boolean
}

const Header = ({title, showCancel = true}: HeaderProps) => {

    const navigation = useNavigation();

    function goBackHome(){
        navigation.navigate('Map')
    }

    

    return(
        <View style={style.container}>
            <BorderlessButton>
                <Feather name="arrow-left" size={24} color="#15b6d6"
                    onPress={navigation.goBack}
                /> 
            </BorderlessButton>
            
            

            <Text style={style.title} >
                {title}
            </Text>

            {
                showCancel ? (
                    <BorderlessButton>
                        <Feather name="x" size={24} color="#ff669d"
                            onPress={goBackHome}
                        /> 
                    </BorderlessButton>
                ) : <View/>
            }
        </View>
    )
}

export default Header