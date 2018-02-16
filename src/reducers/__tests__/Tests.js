import { INITIAL_STATE, forms } from '../AuthReducer';
import { createUserError, createUserSuccess } from '../../actions/AuthActions';

it('returns the same state on an unhandled action', () => {
    expect(forms(INITIAL_STATE, { type: 'MODIFY_EMAIL' })).toMatchSnapshot();
});

it('handles cadastro_usuario_erro action', () => {
    const error = new Error('Look ma! I am an error');
    expect(forms(INITIAL_STATE, createUserError(error))).toMatchSnapshot();
});

it('handles cadastro_usuario_sucesso action', () => {
    expect(forms(INITIAL_STATE, createUserSuccess(''))).toMatchSnapshot();
});
