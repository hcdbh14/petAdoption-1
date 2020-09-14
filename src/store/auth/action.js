import { authTypes } from './authTypes';
import { auth } from '../../config/firebase';

export const signIn = (email, password) => async dispatch => {

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('success');
      dispatch(signInSuccess());
    })
    .catch((err) => {
      console.log(err.code);
      console.log(err.message);
      dispatch(signInFail(err.message));
    });
}


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