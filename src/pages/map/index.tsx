import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {Feather} from '@expo/vector-icons'

import markerMap from  '../../images/map-marker.svg';

import style from './style';

export default function Map(){
    
    

    return(
        <View style={style.container}>
            <MapView style={style.mapview}
                provider={PROVIDER_GOOGLE}
                initialRegion={{ 
                    latitude: -16.176927, 
                    longitude: -40.693608,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008
                }}
                        
        >
            <Marker 
                icon={markerMap}
                coordinate={{
                    latitude: -16.176927, 
                    longitude: -40.693608,
                }}
                calloutAnchor={{
                    x: 4.2,
                    y: 1
                }}
                
            >

                <Callout 
                    tooltip
                    onPress={()=>{alert('oi')}}
                    >
                    <View style={style.containerCallout} >
                        <Text style={style.textCallout} >trabalho</Text>
                    </View>
                    
                </Callout>
            </Marker>

        </MapView>
                
            <View style={style.footer}>
                <Text style={style.textFooter}>
                    2 orfanatos encontrados
                </Text>

                <TouchableOpacity style={style.buttonFooter}>
                    <Feather name="plus" size={20} color='#fff' />
                </TouchableOpacity>
            </View>

        </View>        

    )
}