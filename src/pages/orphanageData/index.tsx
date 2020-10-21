import React, { useState } from 'react';
import { ScrollView, View, Switch, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

import styles from './style'
import { useNavigation, useRoute } from '@react-navigation/core';
import api from '../../connections/connection';

interface Orphanage{
  name: string,
  latitude: number,
  longitude: number,
  about: string,
  instructions: string,
  opening_hours: string,
  open_on_weekends: boolean
}

interface RouteParams{
  position:{
    latitude: number,
    longitude: number
  }
}
const OrphanageData = () => {

    const navigator = useNavigation();

    const route = useRoute();

    const position = route.params as RouteParams;



    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [instructions, setInstructions] = useState('');
    const [opening_hours, setOpeningHours] = useState('');
    const [open_on_weekends, setOpenOnWeekends] = useState(true);
    const [images, setImages] = useState<string[]>([]);

    async function imagePicker(){
      const {status} = await ImagePicker.requestCameraRollPermissionsAsync();

      if ( status !== 'granted') {
        alert( 'Eita! Precisamos de acesso as suas fotos!');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images
      })

      if (result.cancelled) {
        return;
      }

      

      setImages([...images, result.uri])
    } 


    async function createdOrphanage(){
        const {latitude, longitude} = position.position;

        const data = new FormData();

        data.append('name', name);
        data.append('about', about);
        data.append('latitude', String(latitude));
        data.append('longitude', String(longitude));
        data.append('instructions', instructions);
        data.append('opening_hours', opening_hours);
        data.append('open_on_weekends',  String(open_on_weekends));

        images.forEach((image, index)=>{
          data.append('image',{
            name: `image_${index}.jpg`,
            type: 'image/jpg',
            uri: image
          } as any)
        })

        await api.post('/createorphanage', data);

        alert('Orphanage Criado com sucesso');
        
        navigator.navigate('Map');
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Dados</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Sobre</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={about}
        onChangeText={setAbout}
      />

      <Text style={styles.label}>Whatsapp</Text>
      <TextInput
        style={styles.input}
      />

      <Text style={styles.label}>Fotos</Text>

      <View style={styles.uploadedImageContainer}>
        {
          images.map((image, index) => {
            return(
              <View style={styles.uploadedImage} >
                 <Image key={index} source={{uri: image}} /> 
              </View>
            );
          })
        }

      </View>

      <TouchableOpacity style={styles.imagesInput} onPress={imagePicker}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      <Text style={styles.title}>Visitação</Text>

      <Text style={styles.label}>Instruções</Text>
      <TextInput
        style={[styles.input, { height: 110 }]}
        multiline
        value={instructions}
        onChangeText={setInstructions}
      />

      <Text style={styles.label}>Horario de visitas</Text>
      <TextInput
        style={styles.input}
        value={opening_hours}
        onChangeText={setOpeningHours}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Atende final de semana?</Text>
        <Switch 
          thumbColor="#fff" 
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={open_on_weekends}
          onValueChange={setOpenOnWeekends}
        />
      </View>

      <RectButton style={styles.nextButton} onPress={createdOrphanage}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
    )
}

export default OrphanageData;