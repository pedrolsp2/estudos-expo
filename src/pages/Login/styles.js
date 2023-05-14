import { StyleSheet } from "react-native";
import { secundaryColor } from "../LetsGo/styles";
 export const primaryColor = '#1A0751';
   export const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    containerLogin:{
        padding: 12,
        flex: 1,
        justifyContent: 'space-between'
    },
    Title:{
        fontFamily: 'Poppins_700Bold',
        fontSize: 32,
        textAlign: 'center',
        color: primaryColor,
        marginTop: '5%'
    },
    containerInput:{
        width: '100%',
        position: 'relative',
        gap: 12,
        marginTop: '5%'
    },
    input:{
        width: '100%',
        height: 56, 
        borderWidth: 2, 
        borderColor: "#1C3F7C",
        elevation: 4,
            shadowColor: '#1C3F7C',
            shadowOffset: {
              width: 0,
              height: 2.70244,
            },
            shadowRadius: 2.70244,
            shadowOpacity: 0.19,      
        borderRadius: 32
    },
    icon:{
        position: 'absolute',
        top: 8,
        left: 12
    },
    iconEye:{
        position: 'absolute',
        top: 8,
        right: 16
    },
    textInput:{
        width: '100%',
        height: 56,
        paddingStart: 52,
        fontSize: 16,
        fontFamily: 'Poppins_400Regular'
    },
    containerButtons:{
        gap: 8
    },
    Button:{
        borderWidth: 1,
        borderColor: '#fafafa',
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 32,
    },
    TextButton:{
        fontFamily: 'Poppins_700Bold',
        color: '#fafafa'
    },
    logar:{
        backgroundColor: primaryColor
    },
    account:{
        backgroundColor: secundaryColor
    }
   })