import React from 'react'

const ContactUs = () => {

    return (
        <div className="contact">
            <div className="contact__formSide">
                <div>
                    <h1 className="contact__title">צור קשר איתנו</h1>
                    <input type="text" className="contact__textFieldTitleFirst" value="שם:" disabled />
                    <input className="contact__textField" type="text" name="name" />

                    <input type="text" className="contact__textFieldTitle" value="מייל:" disabled />
                    <input className="contact__textField" type="text" name="name" />

                    <input type="text" className="contact__textFieldTitle" value="נייד:" disabled />
                    <input className="contact__textField" type="text" name="name" />
                </div>

                <input type="text" className="contact__textFieldTitleBig" value="הודעה:" disabled />
                <br />
                <div>
                    <textarea name="textarea" className="contact__textFieldBig" type="text" name="name" />

                </div>
                <button class="contact__send">שלח</button>
            </div>

            <div className="contact__animalSide">
                <img src={require('../../../images/dog-and-cat.svg')} className="contact__dogAndCat" />
            </div>
            <br />
            <div className="contact__white-box" />
        </div>
    )
}

export default ContactUs
