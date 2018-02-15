import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import FormCadastro from './components/FormCadastro';
import FormLogin from './components/FormLogin';
import BoasVindas from './components/BoasVindas';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene
                        initial
                        key="formLogin"
                        component={FormLogin}
                        title="Login"
                        titleStyle={{ alignSelf: 'center' }}
                    />
                    <Scene
                        key="formCadastro"
                        component={FormCadastro}
                        title="Cadastro"
                        titleStyle={{ alignSelf: 'center' }}
                    />
                    <Scene
                        key="boasVindas"
                        component={BoasVindas}
                        title="Boas Vindas"
                        titleStyle={{ alignSelf: 'center' }}
                    />
                </Stack>
            </Router>
        );
    }
}
