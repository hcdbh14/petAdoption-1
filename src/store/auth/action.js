import { authTypes } from './authTypes';

export const signin = (email, password, callback) => async dispatch => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          dispatch(signInSuccess());
          callback();
        })
        .catch(() => {
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