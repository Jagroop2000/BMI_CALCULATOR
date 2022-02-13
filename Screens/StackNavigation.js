import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./SplashScreen";
import StartScreen from "./StartScreen";
import Gender from "./Gender";
import HeightNWeight from "./HeightNWeight";
import ResultScreen from "./ResultScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return(

    <Stack.Navigator
    screenOptions={{
        headerShown: false
      }}
    >

         <Stack.Screen name="SplashScreen"  component={SplashScreen} />
         <Stack.Screen name="StartScreen"  component={StartScreen} />
         <Stack.Screen name="Gender"  component={Gender} />
         <Stack.Screen name="HeightNWeight"  component={HeightNWeight} />
         <Stack.Screen name="ResultScreen"  component={ResultScreen} />
    </Stack.Navigator>
    );
};

export default StackNavigation;