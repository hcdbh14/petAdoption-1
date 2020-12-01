import React, { useState } from 'react'
import Input from '../../ui/Input';

const ContactUs = () => {

    const [state, setState] = useState({
        name: '',
        mail: '',
        phone: '',
        message: '',
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        setState({
            [name]: value
        })
    }

    return (
        <div className="contact-us">
            <form className="contact-us__form">
                <h2 className="contact-us__form__title"> צור קשר איתנו</h2>
                <div className="contact-us__form__top">
                    <input
                        type={"text"}
                        value={state.name}
                        name={"name"}
                        placeholder={"שם:"}
                        onChange={handleChange}

                        className="contact-us__input"
                    />
                    {/* <label for="name" className='form__input__error' >{"אנא הכנס/י שם תקין"}</label> */}

                    <input
                        type={"email"}
                        value={state.mail}
                        name={"email"}
                        placeholder={"אימייל:"}
                        onChange={handleChange}

                        className="contact-us__input"
                    />
                    {/* <label for="email" className='form__input__error' >{"אנא הכנס/י שם מלא"}</label> */}

                    <input
                        type={"text"}
                        value={state.phone}
                        name="phone"
                        placeholder={"טלפון:"}
                        onChange={handleChange}

                        className="contact-us__input"
                    />
                    {/* <label for="phone" className='form__input__error' >{"אנא הכנס/י טלפון תקין"}</label> */}

                </div>
                <div className="contact-us__form__bottom">
                    <textarea
                        value={state.message}
                        name="message"
                        placeholder={"הודעה:"}
                        onChange={handleChange}

                        className="contact-us__textarea"
                    >Some text...</textarea>

                    {/* <label for="message" className='form__input__error' >{"אנא הכנס/י טלפון תקין"}</label> */}
                </div>

            </form>

            <div className="contact-us__image">
            </div>
        </div>
    )
}

export default ContactUs
