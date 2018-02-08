const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: ''
};

export default (state = INITIAL_STATE, action) => {
    if (action.type === 'modify_email') {
        return { ...state, email: action.payload };
    }

    if (action.type === 'modify_password') {
        return { ...state, senha: action.payload };
    }
    return state;
};
