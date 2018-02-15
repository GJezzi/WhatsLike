import React from 'react';
import { View, Button, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../imgs/logo.png');
const background = require('../imgs/bg.png');

export default props => (
    <ImageBackground source={background} style={styles.background}>
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Seja Bem Vindo!</Text>
                <Image source={logo} />
            </View>
            <View style={styles.buttonView}>
                <Button title="Fazer Login" color="#115E54" onPress={() => Actions.formLogin()} />
            </View>
        </View>
    </ImageBackground>
);

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: null
    },
    container: {
        flex: 1
    },
    titleView: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonView: {
        flex: 1,
        padding: 20
    },
    titleText: {
        fontSize: 20,
        color: '#FFF'
    }
});
