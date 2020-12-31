import React from 'react';
import ContactUs from '../layout/contact/ContactUs';

const ContactPage = () => {
    return (
        <div>
            <img src={require('../../images/pet-gang.svg')} className="pet-gang" alt="קבוצה של כלבים חתולים וכל מיני חיות אחרות" />
            <ContactUs />
        </div >
    )
}

export default ContactPage
