import React from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';

import { modifyEmail, modifyPassword, modifyName } from '../actions/AuthActions';

const background = require('../imgs/bg.png');

const formCadastro = props => (
    <ImageBackground source={background} style={styles.background} >
        <View style={styles.container}>
            <View style={styles.divFormCadastro} >
                <TextInput 
                    value={props.nome} style={styles.txtInput} placeholder='Nome' 
                    onChangeText={texto => props.modifyName(texto)}
                />
                <TextInput 
                    value={props.email} style={styles.txtInput} placeholder='E-mail' 
                    onChangeText={texto => props.modifyEmail(texto)}
                />
                <TextInput 
                    secureTextEntry
                    value={props.senha} style={styles.txtInput} placeholder='Senha' 
                    onChangeText={texto => props.modifyPassword(texto)}
                />
            </View>
            <View style={styles.divButton} >
                <Button title='Cadastrar' color='#115E54' onPress={() => false} />
            </View>
        </View>
    </ImageBackground>
);

const mapStateToProps = state => (
    {
        nome: state.AuthReducer.nome,
        email: state.AuthReducer.email,
        senha: state.AuthReducer.senha
    }
);

export default connect(mapStateToProps, { modifyEmail, modifyPassword, modifyName })(formCadastro);

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 10
    },
    divFormCadastro: {
        flex: 4,
        justifyContent: 'center'
    },
    divButton: {
        flex: 1
    },
    txtInput: {
        fontSize: 20,
        height: 45
    }
});
