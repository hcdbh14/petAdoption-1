import firebase from 'firebase';
import { authTypes } from './authTypes';
import { auth, firebaseApp } from '../../config/firebase';
const firestore = firebaseApp.firestore()


export const facebookSignIn = () => async dispatch => {

  var provider = new firebase.auth.FacebookAuthProvider();

  auth.signInWithPopup(provider).then(function (result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log('success');
    dispatch(signInSuccess());
    // ...
  }).catch(function (err) {
    // Handle Errors here.
    var errorCode = err.code;
    var errorMessage = err.message;
    // The email of the user's account used.
    var email = err.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = err.credential;
    dispatch(signInFail(err.message));
    // ...
  });
}

export const googleSignIn = () => async dispatch => {

  var provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log('success');
    dispatch(signInSuccess());
    // ...
  })
    .catch(function (err) {
      // Handle Errors here.
      var errorCode = err.code;
      var errorMessage = err.message;
      // The email of the user's account used.
      var email = err.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = err.credential;
      dispatch(signInFail(err.message));
      // ...
    });
};

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


export const register = (email, password, name) => async dispatch => {

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('success');
      dispatch(registerSuccess(email, name));
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




export const checkIfUserVerified = () => async dispatch => {

  auth.currentUser.reload()
    .then(() => {
      if (auth.currentUser.emailVerified === true) {
        console.log(auth.currentUser.emailVerified)
        console.log('user is verified')
        dispatch(userVerified());
      } else {
        console.log(auth.currentUser.emailVerified)
        console.log('user is not verified')
        dispatch(userNotVerified());
      }
    })
    .catch((err) => {
      console.log(err.code);
      console.log(err.message);
      console.log('failed to reload user profile')
      dispatch(userNotVerified());
    })
};


export const signInAnonymously = (petRef) => {
  auth.signInAnonymously()
    .then(() => {
      console.log("success")
      petRef.update({ likeCount: firebase.firestore.FieldValue.increment(1) });
    })
    .catch((err) => {
      console.log(err.code);
      console.log(err.message);
      console.log('failed to sign user')
    })
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

export const registerSuccess = (email, name) => {
  const userUid = auth.currentUser.uid;

  auth.currentUser.reload();
  auth.currentUser.sendEmailVerification();

  firestore.collection("Users_Data").doc(userUid).set({
    name: name,
    email: email,
    petsID: []
  })
    .then(() => console.log("Document successfully written!"))
    .catch((error) => console.error("Error writing document: ", error));

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

export const userVerified = () => {
  return {
    type: authTypes.USER_VERIFIED
  };
}

export const userNotVerified = () => {
  return {
    type: authTypes.USER_NOT_VERIFIED
  };
}



