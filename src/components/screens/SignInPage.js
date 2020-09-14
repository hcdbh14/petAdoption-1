import React from 'react'
import { signIn } from '../../store/auth/action'
import { useSelector, useDispatch } from 'react-redux';

const SignInPage = () => {
    const authState = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    const error = (
        <div>
            <h3>false</h3>
            {authState.error ? <h3>error: {authState.error}</h3> : null}
        </div>
    )
    return (
        <div>
            <h1>SignIn</h1>
            <h1 onClick={() => dispatch(signIn('kennnkuro15@gmail.com', 'tt123456'))}> send</h1>


            <h3>is signin :</h3>
            {authState.signInSuccess ? <h3>true</h3> : error}


        </div>
    )
}

export default SignInPage
