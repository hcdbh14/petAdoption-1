import React from 'react';
import Contact from '../layout/contact/Contact';

const ContactPage = () => {
    return (
        <div>
            <img src={require('../../images/pet-gang.png')} className="pet-gang" alt="קבוצה של כלבים חתולים וכל מיני חיות אחרות" />
            <Contact />
        </div >
    )
}

export default ContactPage
