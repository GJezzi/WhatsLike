export const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case 'MODIFY_EMAIL':
            return { ...state, email: action.payload };
        case 'MODIFY_PASSWORD':
            return { ...state, senha: action.payload };
        case 'MODIFY_NAME':
            return { ...state, nome: action.payload };
        case 'cadastro_usuario_erro':
            return { ...state, erroCadastro: action.payload };
        case 'cadastro_usuario_sucesso':
            return { ...state, nome: '', senha: '' };
        default:
            return state;
    }
};
