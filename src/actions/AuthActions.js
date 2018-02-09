import firebase from 'firebase';

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

export const createUser = ({ nome, email, senha }) => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha)
        .then(user => console.log(user))
        .catch(error => console.log(error));

    return {
        type: 'teste'
    };
};
