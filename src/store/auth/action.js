import { authTypes } from './authTypes';
import firebase from '../../config/firebase';

export const signIn = (email, password) => async dispatch => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('success');
          dispatch(signInSuccess());
        })
        .catch(() => {
          console.log('fail');
          dispatch(signInFail("login failed"));
        });
    } catch (err) {
      dispatch(signInFail(err));
    }
  };


export const signInSuccess = () => {
    return {
        type: authTypes.SIGNIN_SUCCESS,
    };
}

export const signInFail = (error) => {
    return {
        type: authTypes.SIGNIN_ERROR,
        error
    };
}