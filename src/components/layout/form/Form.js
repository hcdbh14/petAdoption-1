import React from 'react'
import Input from '../ui/Input';



const Form = (props) => {
    const { state, handleChange } = props
    return (
        <form>
            <Input
                type={"text"}
                value={state.email}
                name={"email"}
                placeholder={"email"}
                handleChange={handleChange}
                error={"please check your email"}
            />
            <Input
                type={state.isPassShow ? "text" : "password"}
                value={state.password} name={"password"}
                placeholder={"password"}
                handleChange={handleChange}
                error={"password must have 5 digits"}
            />


            {state.isRegister ? (
                <Input
                    type={"text"}
                    value={state.personName} name={"your name"}
                    placeholder={"type your name here"}
                    handleChange={handleChange}
                    error={"name must have at least 2 digits"}
                />
            ) : null}


            <label>
                <Input type={"checkbox"} checked={state.isPassShow} name={"isPassShow"} handleChange={handleChange} />
                show password
            </label>


        </form>
    )
}

export default Form
