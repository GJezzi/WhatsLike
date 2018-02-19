import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

export const modifyEmail = texto => ({
    type: 'MODIFY_EMAIL',
    payload: texto
});

export const modifyPassword = texto => ({
    type: 'MODIFY_PASSWORD',
    payload: texto
});

export const modifyName = texto => ({
    type: 'MODIFY_NAME',
    payload: texto
});

export const createUser = ({ nome, email, senha }) => dispatch => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha)
        .then(user => {
            const emailB64 = b64.encode(email);
            firebase
                .database()
                .ref(`/contatos/${emailB64}`)
                .push({ nome })
                .then(value => createUserSuccess(dispatch));
        })
        .catch(error => createUserError(error, dispatch));
};

export const createUserSuccess = dispatch => {
    dispatch({ type: 'cadastro_usuario_sucesso' });

    Actions.boasVindas();
};

export const createUserError = (error, dispatch) =>
    dispatch({
        type: 'cadastro_usuario_erro',
        payload: error.message
    });
