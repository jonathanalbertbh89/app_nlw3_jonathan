import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Map from '../pages/map/index'
import { showHelp } from 'yargs';


const Stack = createStackNavigator()

const Routes = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Map" component={Map}/>
        </Stack.Navigator>
    )
} 

export default Routes