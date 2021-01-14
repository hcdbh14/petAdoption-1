import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';

const Contact = () => {

    const [contactState, setContactState] = useState(
        {
            name: "",
            email: "",
            phone: "",
            message: ""
        }
    )

    const handleNameChange = (newText) => {
        setContactState({ ...contactState, name: newText.target.value })
    }

    const handleEmailChange = (newText) => {
        setContactState({ ...contactState, email: newText.target.value })
    }

    const handlePhoneChange = (newText) => {
        setContactState({ ...contactState, phone: newText.target.value })
    }

    const handleMessageChange = (newText) => {
        setContactState({ ...contactState, message: newText.target.value })
    }

    const handleSubmit = () => {

        let templateParams = {
          from_name: contactState.name,
          from_email: contactState.email,
          from_phone: contactState.phone,
          message: contactState.message,
         }
         emailjs.send(
          'Pet_Five',
          'template_bg6xe1f',
           templateParams,
          'user_0i9bLC0dfZ4TaKG0YpwNo'
         )
     }

        return (
            <div className="contact">
                <div className="contact__formSide">
                    <div>
                        <h1 className="contact__title">צור קשר איתנו</h1>
                        <input type="text" className="contact__textFieldTitleFirst" value="שם:" disabled />
                        <input className="contact__textField" type="text" onChange={handleNameChange} />

                        <input type="text" className="contact__textFieldTitle" value="מייל:" disabled />
                        <input className="contact__textField" type="text" onChange={handleEmailChange} />

                        <input type="text" className="contact__textFieldTitle" value="נייד:" disabled />
                        <input className="contact__textField" type="text" onChange={handlePhoneChange} />
                    </div>

                    <input type="text" className="contact__textFieldTitleBig" value="הודעה:" disabled />
                    <br />
                    <div>
                        <textarea className="contact__textFieldBig" type="text" onChange={handleMessageChange} />

                    </div>
                    <button className="contact__send" onClick={handleSubmit}>שלח</button>
                </div>

                <div className="contact__animalSide">
                    <img src={require('../../../images/dog-and-cat.svg')} className="contact__dogAndCat" alt="כלב וחתול נחים" />
                </div>
                <br />
                <div className="contact__white-box" />
            </div>
        )
    }

    export default Contact
