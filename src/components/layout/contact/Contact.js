import React, { useState } from 'react';

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
        setContactState({...contactState, name: newText.target.value})
    }

    const handleEmailChange = (newText) => {
        setContactState({...contactState, email: newText.target.value})
    }

    const handlePhoneChange = (newText) => {
        setContactState({...contactState, phone: newText.target.value})
    }

    const handleMessageChange = (newText) => {
        setContactState({...contactState, message: newText.target.value})
    }

    const sendMail = () => {
        
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
                <button className="contact__send">שלח</button>
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
