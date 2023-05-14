import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '../pages/Welcome'
import LetsGo from '../pages/LetsGo'
import Login from "../pages/Login";
import NewAcconut from "../pages/NewAccount";
import Index from '../pages/Index';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
             {/*<Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            /> 
            <Stack.Screen
                name="LetsGo"
                component={LetsGo}
                options={{ headerShown: false }}
        />*/}
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NewAcconut"
                component={NewAcconut}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Index"
                component={Index}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}