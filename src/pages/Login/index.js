import React, {useState} from 'react';
import { View, Image, Text, PixelRatio, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native"; 
import { AntDesign, Ionicons } from '@expo/vector-icons';
import {primaryColor, styles} from './styles';
import { useFonts, Poppins_400Regular, Poppins_700Bold} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { firebaseApp } from '../../Configs';
import auth from '@react-native-firebase/auth';

export default function Login() { 
    const [fontsLoaded ] = useFonts({
      Poppins_400Regular,
      Poppins_700Bold
    })
  
    if(!fontsLoaded){
      <AppLoading/>
    }
    
    const [hidePass, setHidePass] = useState(true);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');


    function singUp(){
        alert(password + user)
        auth()
        .createUserWithEmailAndPassword(user, password)
        .then(userCredential => {
          console.log('user: ', userCredential);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('Usuário já cadastrado');
          }
          if (error.code === 'auth/invalid-email') {
            alert('Usuário inválido');
          }
        });
    }

    return(
        <SafeAreaView style={styles.container}>
            <Image source={require('../../../assets/imgLogin.png')} width={PixelRatio.getPixelSizeForLayoutSize(100)} height={PixelRatio.getPixelSizeForLayoutSize(100)} resizeMode="cover" />
            <View style={styles.containerLogin}>
                <View style={styles.containerInput}>
                    <Text style={styles.Title}>Bem vindo de volta!</Text>
                    <View style={styles.input}>
                        <View style={styles.placeholder}>
                            <Ionicons name='person-outline' size={32} color="#1C3F7C" style={styles.icon}/>
                            <TextInput
                            style={styles.textInput}
                            placeholder='Usuário'
                            value={user}
                            onChangeText={setUser}
                            />
                        </View>
                    </View>
                    <View style={styles.input}>
                        <View style={styles.placeholder}>
                            <Ionicons name='key-outline' size={32} color="#1C3F7C" style={styles.icon}/>
                            <TextInput
                            style={styles.textInput}
                            placeholder='Senha'
                            secureTextEntry={hidePass}
                            value={password}
                            onChangeText={setPassword}
                            />
                            {hidePass ?
                                <TouchableOpacity style={styles.iconEye}>
                                    <Ionicons
                                    name='eye-outline'
                                    size={32}
                                    color="#1C3F7C"
                                    onPress={() => setHidePass(!hidePass)}/>
                                </TouchableOpacity>

                                :

                                <TouchableOpacity style={styles.iconEye}>
                                    <Ionicons
                                    name='eye-off-outline'
                                    size={32}
                                    color="#1C3F7C"
                                    onPress={() => setHidePass(!hidePass)}/>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>
                    <View style={styles.containerButtons}>
                        <TouchableOpacity style={[styles.Button, styles.logar]}>
                            <Text style={styles.TextButton}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.Button, styles.account]} onPress={singUp}>
                            <Text style={styles.TextButton}>Criar Conta</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </SafeAreaView>
    )
}