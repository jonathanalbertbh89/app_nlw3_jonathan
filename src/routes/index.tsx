import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Map from '../pages/map/index';

import OrphanageDatails from '../pages/orphanageDetails';
import SelectPosition from '../pages/selectMapPosition';
import OrphanageData from '../pages/orphanageData';
import Header from '../components/index';



const Stack = createStackNavigator()

const Routes = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Map" component={Map}/>
            <Stack.Screen name="OrphanageDetails" component={OrphanageDatails}
            
                options={{
                    headerShown: true,
                    header: () => <Header showCancel={false} title="Orfanato"/>    
                }}
            />

            <Stack.Screen name="SelectPosition" component={SelectPosition}
            
                options={{
                    headerShown: true,
                    header: () => <Header  title="Selecione a Posição do Orfanato"/>    
            }}
            />

            <Stack.Screen name="OrphanageData" component={OrphanageData}
            
                options={{
                    headerShown: true,
                    header: () => <Header title="Cadastro"/>    
            }}
            
            />

        </Stack.Navigator>
    )
} 

export default Routes