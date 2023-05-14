import React, {useState} from 'react';
import { View, Image, Text, PixelRatio, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native"; 
import { AntDesign, Ionicons } from '@expo/vector-icons';
import {primaryColor, styles} from './styles';
import { useFonts, Poppins_400Regular, Poppins_700Bold} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from '../../Configs/firebase-config';

export default function Login() { 
    const [fontsLoaded ] = useFonts({
      Poppins_400Regular,
      Poppins_700Bold
    })
  
    if(!fontsLoaded){
      <AppLoading/>
    }
    
    const navigation = useNavigation();
    const [hidePass, setHidePass] = useState(true);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () =>{
        createUserWithEmailAndPassword(auth,user, password)
        .then((userCredential) => {
          console.log('user new');
          const userOn = userCredential.user;
          console.log(userOn);
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                setError('E-mail já está sendo usado.');
                setUser('');
            }

            if (error.code === 'auth/invalid-email') {
            setError('E-mail invalido.');
            setUser('');
            }

            if (error.code === 'auth/invalid-password') {
                setError('A senha é inválida, precisa ter pelo menos 6 caracteres.');
                setPassword('');
            }
        });
    }


    const handleSingIn = () =>{
        signInWithEmailAndPassword(auth,user, password)
        .then((userCredential) => {
            console.log('user on');
            const userOn = userCredential.user;
            console.log(userOn);
            navigation.navigate('Index', {dataUser: userOn});
          })
          .catch(error => {
            if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-email') {
                setError('Usuário ou senha incorretos.');
                setPassword('');
                setUser('');
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
                        <Text style={styles.error}>{error}</Text>
                    </View>
                </View>
                    <View style={styles.containerButtons}>
                        <TouchableOpacity style={[styles.Button, styles.logar]} onPress={handleSingIn}>
                            <Text style={styles.TextButton}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.Button, styles.account]} onPress={handleCreateAccount}>
                            <Text style={styles.TextButton}>Criar Conta</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </SafeAreaView>
    )
}