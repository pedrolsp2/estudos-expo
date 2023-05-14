import React from 'react';
import { View, Image, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native"; 
import {styles} from './styles';
import Vector1 from '../../../assets/Vector-Soccer.png';
import { useFonts, Poppins_400Regular, Poppins_700Bold} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

export default function LetsGo() { 
    const navigation = useNavigation();
    const [fontsLoaded ] = useFonts({
      Poppins_400Regular,
      Poppins_700Bold
    })
  
    if(!fontsLoaded){
      <AppLoading/>
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerPercentual}>
                <Image source={Vector1}  style={{marginTop: '30%', width: 200, height: 300}} resizeMode="cover" />
            </View>

            <View style={styles.containerText}>
                <View>
                    <Text style={styles.Title}>Bora lá!</Text>
                    <Text style={styles.Text}>Obtenha seu cadastro, caso ainda não faça parte do nosso time, ou entre com seu usuário de login!</Text>
                </View>

                <View>
                    <TouchableOpacity style={[styles.Button, styles.Login]} onPress={()=>navigation.navigate('Login')}>
                        <Text style={styles.TextButton}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.Button, styles.ButtonNewAccount]} onPress={()=>navigation.navigate('NewAcconut')}>
                        <Text style={styles.TextButton}>Não tem conta? Crie uma agora</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}