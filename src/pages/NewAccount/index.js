import React from 'react';
import { View, Image, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native"; 
// import {styles} from './styles';
import Vector1 from '../../../assets/Vector-Soccer.png';
import { useFonts, Poppins_400Regular, Poppins_700Bold} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

export default function NewAcconut() { 
    const [fontsLoaded ] = useFonts({
      Poppins_400Regular,
      Poppins_700Bold
    })
  
    if(!fontsLoaded){
      <AppLoading/>
    }
    return(
        <SafeAreaView>
            <Text>NewAcconut</Text>
        </SafeAreaView>
    )
}