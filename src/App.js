import React, { Component } from 'react';
import {} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import combineReducers from './reducers/Reducers';

export default class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCfpCLEWsQ0idJjqBfRiRkvq6YgDTTC-kU',
            authDomain: 'whatslike-f5d52.firebaseapp.com',
            databaseURL: 'https://whatslike-f5d52.firebaseio.com',
            projectId: 'whatslike-f5d52',
            storageBucket: 'whatslike-f5d52.appspot.com',
            messagingSenderId: '1088737071808'
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(combineReducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}
