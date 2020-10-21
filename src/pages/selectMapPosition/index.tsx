import React, { useState } from 'react';

import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { MapEvent, Marker } from 'react-native-maps';

import mapMarkerImg from '../../images/Iconmarker.png';

import styles from './style'
import { number } from 'yargs';

const SelectPosition = () => {
    const navigation = useNavigation();

    function handleNextStep() {
        navigation.navigate('OrphanageData', {position});
      }

    const [position, setPosition]  = useState({
      latitude: 0,
      longitude: 0
    })  

    function selectMapPosition(event: MapEvent){
      setPosition(event.nativeEvent.coordinate)
    }

    return (
        <View style={styles.container}>
      <MapView 
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle}
        onPress={selectMapPosition}
      >
        {
          position.latitude !== 0 && position.longitude !== 0 ? (
            <Marker 
              icon={mapMarkerImg}
              coordinate={{ latitude: position.latitude, longitude: position.longitude}}
            />
          ): null
        }
      </MapView>

        {
          position.latitude !== 0 && position.longitude !== 0 ? (
            <RectButton style={styles.nextButton} onPress={handleNextStep}>
              <Text style={styles.nextButtonText}>Próximo</Text>
            </RectButton>
          ): null
        }
      
    </View>
    )
}


export default SelectPosition;