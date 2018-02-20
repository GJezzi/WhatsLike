import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableHighlight,
    ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { modifyEmail, modifyPassword, authenticateUser } from '../actions/AuthActions';

const background = require('../imgs/bg.png');

class FormLogin extends Component {
    mAuthenticateUser() {
        const { email, senha } = this.props;
        this.props.authenticateUser({ email, senha });
    }

    render() {
        return (
            <ImageBackground source={background} style={styles.background}>
                <View style={styles.container}>
                    <View style={styles.divTop}>
                        <Text style={styles.txtTitle}>WhatsLike</Text>
                    </View>
                    <View style={styles.divFormLogin}>
                        <TextInput
                            testID="inputEmail"
                            value={this.props.email}
                            style={styles.txtInput}
                            placeholder="E-mail"
                            placeholderTextColor="#FFF"
                            onChangeText={texto => this.props.modifyEmail(texto)}
                        />
                        <TextInput
                            testID="inputSenha"
                            value={this.props.senha}
                            style={styles.txtInput}
                            placeholder="Senha"
                            placeholderTextColor="#FFF"
                            onChangeText={texto => this.props.modifyPassword(texto)}
                            secureTextEntry
                        />
                        <Text style={styles.errorText}>{this.props.erroAutenticacao}</Text>
                        <TouchableHighlight
                            testID="formCadastro"
                            onPress={() => {
                                Actions.formCadastro();
                            }}
                        >
                            <Text style={styles.txtLink}>Ainda não tem cadastro? Cadastre-se!</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.divButton}>
                        <Button
                            testID="btnAcessar"
                            title="Acessar"
                            color="#115E54"
                            onPress={() => this.mAuthenticateUser()}
                        />
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => ({
    email: state.AuthReducer.email,
    senha: state.AuthReducer.senha,
    erroAutenticacao: state.AuthReducer.erroAutenticacao
});

export default connect(mapStateToProps, { modifyEmail, modifyPassword, authenticateUser })(
    FormLogin
);

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
        fontSize: 25,
        color: '#FFF'
    },
    txtInput: {
        fontSize: 20,
        height: 45,
        color: '#000'
    },
    txtLink: {
        fontSize: 20,
        color: '#FFF'
    },
    errorText: {
        color: 'red',
        fontSize: 18,
        padding: 15
    }
});
