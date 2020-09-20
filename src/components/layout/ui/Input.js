import React from 'react'

const Input = (props) => {
    const { type, value, name, placeholder, handleChange, error } = props

    const style = ({
        borderColor: error ? 'red' : 'blue'
    })
    return (
        <div>
            <input
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}

                className="form__input"
                style={style}
            />
            <label for={name} className='form__input__error' >{error}</label>
        </div>
    )
}

export default Input
