import React, { useState } from 'react'
import { signIn } from '../../store/auth/action'
import { signOut } from '../../store/auth/action'
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

    const [form, setform] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setform({
            ...form,
            [name]: value
        })
        console.log([name], value)
    }

    const handleSubmit = () => {
        dispatch(signIn(form.email, form.password))
    }

    const handleSignOut = () => {
        dispatch(signOut())
    }
    //'kennnkuro15@gmail.com', 'tt123456'
    return (
        <div>
            <h1>SignIn</h1>
            <h1 onClick={handleSubmit}> send</h1>


            <h3>is signin :</h3>
            {authState.loggedIn ? <h3>true</h3> : error}


            <form>
                <input
                    type="text"
                    value={form.email}
                    name="email"
                    placeholder="email"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    value={form.password}
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                />

            </form>
            
            {authState.loggedIn ? <h3 onClick={handleSignOut}>sign out</h3> : null}
        </div>
    )
}

export default SignInPage
