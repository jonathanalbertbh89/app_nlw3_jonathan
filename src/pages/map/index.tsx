import React, { useEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native'

import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {Feather} from '@expo/vector-icons';

import markerMap from  '../../images/Iconmarker.png';

import style from './style';

import api from '../../connections/connection'

interface Orphanage{
    id: number,
    name: string,
    latitude: number,
    longitude: number
}


export default function Map(){

    const [orphanages, setOrphanages] = useState<Orphanage[]>([])

    useEffect(()=>{
        api.get('/allorphanages').then(response =>  {
            setOrphanages(response.data)
        })
    },[])
    
    const navigation = useNavigation();

    function handleOrphanageDetails(id: number){
        navigation.navigate('OrphanageDetails', {id})
    }

    function navigateToCreateOrphanage(){
        navigation.navigate('SelectPosition')
    }

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
            {
                orphanages.map(orphanage => {
                    return(
                        <Marker
                            key={orphanage.id}
                            icon={markerMap}
                            coordinate={{
                                latitude: orphanage.latitude, 
                                longitude: orphanage.longitude,
                            }}
                            calloutAnchor={{
                                x: 4.2,
                                y: 1
                            }}
                            
                        >

                            <Callout 
                                tooltip
                                onPress={() => handleOrphanageDetails(orphanage.id)}
                                >
                                <View style={style.containerCallout} >
                                    <Text style={style.textCallout} >{orphanage.name}</Text>
                                </View>
                                
                            </Callout>
                        </Marker>
                    )
                })
            }

        </MapView>
                
            <View style={style.footer}>
                <Text style={style.textFooter}>
                    {orphanages.length} orfanatos encontrados
                </Text>

                <TouchableOpacity style={style.buttonFooter}
                    onPress={navigateToCreateOrphanage}

                >

                    <Feather name="plus" size={20} color='#fff' />
                </TouchableOpacity>
            </View>

        </View>        

    )
}