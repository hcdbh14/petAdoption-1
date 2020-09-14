import React from 'react'
import { signIn } from '../../store/auth/action'
import { useSelector, useDispatch } from 'react-redux';

const SignInPage = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <h1 onClick = {dispatch(signIn('kennnkuro15@gmail.com', 'tt123456' ,))} >SignIn</h1>
        </div>
    )
}

export default SignInPage
