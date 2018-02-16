import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, Text } from 'react-native';
import { connect } from 'react-redux';

import { modifyEmail, modifyPassword, modifyName, createUser } from '../actions/AuthActions';

const background = require('../imgs/bg.png');

class FormCadastro extends Component {
    mCreateUser() {
        const { nome, email, senha } = this.props;

        this.props.createUser({ nome, email, senha });
    }

    render() {
        return (
            <ImageBackground source={background} style={styles.background}>
                <View style={styles.container}>
                    <View style={styles.divFormCadastro}>
                        <TextInput
                            value={this.props.nome}
                            style={styles.txtInput}
                            placeholder="Nome"
                            placeholderTextColor="#FFF"
                            onChangeText={texto => this.props.modifyName(texto)}
                        />
                        <TextInput
                            value={this.props.email}
                            style={styles.txtInput}
                            placeholderTextColor="#FFF"
                            placeholder="E-mail"
                            onChangeText={texto => this.props.modifyEmail(texto)}
                        />
                        <TextInput
                            secureTextEntry
                            value={this.props.senha}
                            style={styles.txtInput}
                            placeholderTextColor="#FFF"
                            placeholder="Senha"
                            onChangeText={texto => this.props.modifyPassword(texto)}
                        />
                        <Text style={styles.errorText}>{this.props.erroCadastro}</Text>
                    </View>
                    <View style={styles.divButton}>
                        <Button
                            title="Cadastrar"
                            color="#115E54"
                            onPress={() => this.mCreateUser()}
                        />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => ({
    nome: state.AuthReducer.nome,
    email: state.AuthReducer.email,
    senha: state.AuthReducer.senha,
    erroCadastro: state.AuthReducer.erroCadastro
});

export default connect(mapStateToProps, {
    modifyEmail,
    modifyPassword,
    modifyName,
    createUser
})(FormCadastro);

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
        height: 45,
        color: '#000'
    },
    errorText: {
        color: 'red',
        fontSize: 18
    }
});
