import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "../screens/auth/LoginScreen";
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";

export default function () {
    const Stack = createStackNavigator();
    const containerRef = React.useRef();

    return (
        <NavigationContainer ref={containerRef} >
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
