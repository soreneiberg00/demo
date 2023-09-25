//import {Text, View } from 'react-native';
import * as React from "react";
import DetailsScreen from './DetailsScreen';
import ScreenOne from "./stackComponents/screenOne";
import ScreenTwo from "./stackComponents/screenTwo";
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



//Husk at ændre navn
export default function StackNavigator() {
    return (
        <View>
            <Stack.Navigator 
            initialRouteName="Details">

            <Stack.Screen name="Details" component={DetailsScreen} />
            
            
            <Stack.Screen name="ScreenOne" component={ScreenOne} />
            
            
            <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
            </Stack.Navigator>


        </View>
    );
}