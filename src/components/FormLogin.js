import React from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    Button,
    StyleSheet, 
    TouchableHighlight, 
    ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { modifyEmail, modifyPassword } from '../actions/AuthActions';

const background = require('../imgs/bg.png');

const formLogin = props => (
    <ImageBackground source={background} style={styles.background} >
        <View style={styles.container}>
            <View style={styles.divTop}>
                <Text style={styles.txtTitle}>WhatsLike</Text>
            </View>
            <View style={styles.divFormLogin}>
                <TextInput 
                    value={props.email} style={styles.txtEmail} 
                    placeholder='E-mail' onChangeText={texto => props.modifyEmail(texto)} 
                />
                <TextInput 
                    value={props.senha} style={styles.txtPassword} 
                    placeholder='Senha' onChangeText={texto => props.modifyPassword(texto)} 
                    secureTextEntry
                />
                <TouchableHighlight onPress={() => { Actions.formCadastro(); }} >
                    <Text style={styles.txtLink}>Ainda não tem cadastro? Cadastre-se!</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.divButton} >
                <Button title='Acessar' color='#115E54' onPress={() => false} />
            </View>
        </View> 
    </ImageBackground>        
);

const mapStateToProps = state => (
    {
        email: state.AuthReducer.email,
        senha: state.AuthReducer.senha
    }
);

export default connect(mapStateToProps, { modifyEmail, modifyPassword })(formLogin);

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 10
    },
    divTop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    divFormLogin: {
        flex: 2
    },
    divButton: {
        flex: 2
    },
    txtTitle: {
        fontSize: 25
    },
    txtEmail: {
        fontSize: 20,
        height: 45
    },
    txtPassword: {
        fontSize: 20,
        height: 45
    },
    txtLink: {
        fontSize: 20,
    }
});
