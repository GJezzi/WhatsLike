const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'MODIFY_EMAIL':
            return { ...state, email: action.payload };
        case 'MODIFY_PASSWORD': 
            return { ...state, senha: action.payload };
        case 'MODIFY_NAME': 
            return { ...state, nome: action.payload };
        default:
            return state;
    }   
};
