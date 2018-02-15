import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

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
        .then(user => createUserSuccess(dispatch))
        .catch(error => createUserError(error, dispatch));
};

const createUserSuccess = dispatch => {
    dispatch({ type: 'cadastro_usuario_sucesso' });

    Actions.boasVindas();
};

const createUserError = (error, dispatch) =>
    dispatch({
        type: 'cadastro_usuario_erro',
        payload: error.message
    });
