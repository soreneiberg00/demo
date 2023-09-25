import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


//Importerede komponenter
import HomeScreen from './components/Homescreen';
import SettingsScreen from './components/SettingsScreen';
import StackNavigator from './components/DetailsScreen';
import Details2 from './components/Homescreen';


//Erstattet af stacknavigator
//import DetailsScreen from './components/DetailsScreen';

//Her oprettes en instans af tabnavigator.
const Tab = createBottomTabNavigator();



//Her oprettes de tre tekst referencer, der skal benyttes i vores screen komponenter
const homeScreenText = "Dette er HomeScreen!"
const settingsScreenText = "Dette er SettingsScreen!"

export default function App() {
  return (
    <View style={styles.container}>
      

      <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: [
        {
          display: "flex"
        },
          null
          ],
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') {
              return (
                  <Ionicons
                      name={'home-outline'}
                      size={size}
                      color={color}
                  />
              );
            } else if (route.name === 'Settings') {
              return (
                  <Ionicons
                      name='md-settings-outline'
                      size={size}
                      color={color}
                  />
              );
            }
            else{
              return (
                  <Ionicons
                      name='md-list-outline'
                      size={size}
                      color={color}
                  />
              );
            }
          },
        })}
        >
                <Tab.Screen name="Settings" children={()=><SettingsScreen prop={settingsScreenText}/>} />
                <Tab.Screen name="Home" children={()=><HomeScreen prop={homeScreenText}/>} />
                <Tab.Screen name="Stack" component={StackNavigator}/>

      </Tab.Navigator>
        </NavigationContainer>
      
      <StatusBar style="auto" />
    </View>
  )
};







const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
