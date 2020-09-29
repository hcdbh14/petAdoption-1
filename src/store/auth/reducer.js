import { authTypes } from './authTypes';

const initialState = {
    email: '',
    password: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case authTypes.SIGNIN_SUCCESS:
            return { ...state, loggedIn: true }

        case authTypes.SIGNIN_ERROR:
            return { ...state, loggedIn: false, error: action.error }

        case authTypes.SIGNOUT_SUCCESS:
            return { ...state, loggedIn: false }

        case authTypes.SIGNOUT_ERROR:
            return { ...state, loggedIn: true, error: action.error }
        
        case authTypes.REGISTER_SUCCESS:
            return { ...state, registered: true }

        case authTypes.REGISTER_ERROR:
            return { ...state, registered: false, error: action.error }

        case authTypes.VERIFICATION_SUCCESS:
            return { ...state, sentEmail: true }
        
        case authTypes.VERIFICATION_ERROR:
            return { ...state, sentEmail: false, error: action.error }
        
        case authTypes.USER_VERIFIED:
            return {...state, verified: true }
        
        case authTypes.USER_NOT_VERIFIED: 
            return {...state, verified: false }

        default:
            return state;
    }
}

export default authReducer;