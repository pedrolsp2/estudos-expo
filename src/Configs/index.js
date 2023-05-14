import { initializeApp } from '@react-native-firebase/app'; 

const firebaseConfig = {
    apiKey: "AIzaSyDF3XjEfQUFs0h3zJHnUmLSkXd1prHaBSA",
    authDomain: "talenttrace-6e954.firebaseapp.com",
    projectId: "talenttrace-6e954",
    storageBucket: "talenttrace-6e954.appspot.com",
    messagingSenderId: "865248787516",
    appId: "1:865248787516:web:1cce0d207cb9ba715a5739",
    measurementId: "G-B0G6M6X4RE"
  };

const firebaseApp = initializeApp(firebaseConfig); 

export { firebaseApp };
