import { authTypes } from './authTypes';

const initialState = {
    email: '',
    password: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authTypes.SIGNIN_SUCCESS:
            return { ...state, signInSuccess: true }

        case authTypes.SIGNIN_ERROR:
            return { ...state, signInSuccess: false, error: action.error }
        default:
            return state;
    }
}

export default authReducer;