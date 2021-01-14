import React, { useEffect } from 'react';
import Contact from '../layout/contact/Contact';

const ContactPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <img src={require('../../images/pet-gang.jpg')} className="pet-gang" alt="קבוצה של כלבים חתולים וכל מיני חיות אחרות" />
            <Contact />
        </div >
    )
}

export default ContactPage
