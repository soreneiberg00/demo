import {Button, StyleSheet, Text, View } from 'react-native';
import * as React from "react";
/*
*ScreenOne er den ene af de tre screens i StackNavigatoren
* ScreenOne præsenterer en tekst, der beskriver, hvor brugeren befinder sig samt
* returnerer to <Button/>, som benyttes til henholdsvis at navigere tilbage til sidste Screen og
* navigere ind til den anden screen i stackComponents
* Slutteligt er der inkluderet styling til komponenterne
 */
function ScreenOne({navigation}) {
    return (
        <View>
            <Text style={styles.text}>Screen One!</Text>
            <View>
                <Button title="Go Back" onPress={() => navigation.goBack() } ></Button>
            </View>

            <View>
                <Button title="Go To Screen Two" onPress={() => navigation.navigate('ScreenTwo') } ></Button>
            </View>


        </View>
    );
}


export default ScreenOne

//Lokal styling til brug i ScreenOne
const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
    },
});