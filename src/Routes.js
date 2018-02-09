import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormCadastro from './components/FormCadastro';
import FormLogin from './components/FormLogin';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene
                        key="formLogin"
                        component={FormLogin}
                        title="Login"
                        titleStyle={{ alignSelf: 'center' }}
                        initial
                    />
                    <Scene
                        key="formCadastro"
                        component={FormCadastro}
                        title="Cadastro"
                        titleStyle={{ alignSelf: 'center' }}
                    />
                </Stack>
            </Router>
        );
    }
}
