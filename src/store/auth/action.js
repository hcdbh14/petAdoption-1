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
};

export const signOut = () => async dispatch => {
  
  auth.signOut()
  .then(() => {
    console.log('signed out');
    dispatch(signOutSuccess());
  })
  .catch((err) => {
    console.log(err.code);
    console.log(err.message);
    dispatch(signOutFail(err.message));
  })
};


export const register = (email, password) => async dispatch => {

  auth.createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('success');
    dispatch(registerSuccess());
  })
  .catch((err) => {
    console.log(err.code);
    console.log(err.message);
    dispatch(registerFail(err.message));
  });
};

export const sendEmailVerification = () => async dispatch => {

    auth.currentUser.sendEmailVerification()
    .then(() => {
      console.log('send email verification')
      dispatch(sendEmailSuccess());
    })

    .catch((err) => {
      console.log(err.code);
      console.log(err.message);
      dispatch(sendEmailFail(err.message));
    });
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

export const signOutSuccess = () => {
  return {
    type: authTypes.SIGNOUT_SUCCESS,
  };
}

export const signOutFail = (error) => {
  return {
    type: authTypes.SIGNOUT_ERROR,
    error
  };
}

export const registerSuccess = () => {
  return {
    type: authTypes.REGISTER_SUCCESS,
  };
}

export const registerFail = (error) => {
  return {
    type: authTypes.REGISTER_ERROR,
    error
  };
}

export const sendEmailSuccess = () => {
  return {
    type: authTypes.VERIFICATION_SUCCESS
  };
}

export const sendEmailFail = (error) => {
    return {
      type: authTypes.VERIFICATION_ERROR
    };
}