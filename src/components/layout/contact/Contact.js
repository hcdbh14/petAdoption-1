import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';

const Contact = () => {

    const [contactState, setContactState] = useState(
        {
            name: "",
            email: "",
            phone: "",
            message: "",
            loading: false,
            success: false,
            error: "",
        }
    )

    const focusName = () => {
        document.getElementById("name").focus();
    }

    const focusEmail = () => {
        document.getElementById("email").focus();
    }

    const focusPhone = () => {
        document.getElementById("phone").focus();
    }

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

        if (contactState.name === "" || contactState.email === "" || contactState.phone === "" || contactState.message === "") {
            setContactState({ ...contactState, error: "לא ניתן לשלוח שדות ריקים.", success: false })
            return
        }

        setContactState({ ...contactState, loading: true, success: false, error: "" })
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
        ).then(() => {
            setContactState({ ...contactState, loading: false, success: true, error: "" })
        }, (error) => {
            console.log(error)
            setContactState({ ...contactState, loading: false, error: "הודעה לא נשלחה עקב תקלה." })
        });
    }

    return (
        <div className="contact">
            <div className="contact__formSide">
                <div>
                    <h1 className="contact__title">צור קשר איתנו</h1>
                    <input className="contact__textFieldTitleFirst" value="שם:" onClick={focusName} />
                    <input className="contact__textField" id="name" type="text" onChange={handleNameChange} />

                    <input className="contact__textFieldTitle" value="מייל:" onClick={focusEmail} />
                    <input className="contact__textField" id="email" type="text" onChange={handleEmailChange} />

                    <input type="text" className="contact__textFieldTitle" value="נייד:" onClick={focusPhone} />
                    <input className="contact__textField" id="phone" type="text" onChange={handlePhoneChange} />
                </div>

                <input type="text" className="contact__textFieldTitleBig" value="הודעה:" disabled />
                <br />
                <div>
                    <textarea className="contact__textFieldBig" type="text" onChange={handleMessageChange} />

                </div>
                <div className="contact__sendWrapper">
                    {contactState.loading ?
                        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        :
                        <button className="contact__send" onClick={handleSubmit}>שלח</button>
                    }

                    {contactState.success ?
                        <p className="contact__success">הודעה נשלחה בהצלחה! נענה לה בהקדם האפשרי.</p>
                        :
                        <div />
                    }

                    {contactState.error !== "" ?
                        <p className="contact__error">{contactState.error}</p>
                        :
                        <div />
                    }

                </div>
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
