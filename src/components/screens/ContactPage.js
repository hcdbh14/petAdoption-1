import React from 'react';
import ContactUs from '../layout/contact/contactUs';

const ContactPage = () => {
    return (
        <div>
            <img src={require('../../images/pet-gang.svg')} className="pet-gang" />
            <ContactUs />
        </div >
    )
}

export default ContactPage
