import React, { useEffect } from 'react';
import Contact from '../layout/contact/Contact';

const ContactPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div style={{background: 'white'}}>
            <picture>
                <source srcSet={require('../../images/pet-gang.webp')} type="image/webp" />
                <img src={require('../../images/pet-gang.jpg')} className="pet-gang" alt="קבוצה של כלבים חתולים וכל מיני חיות אחרות"  />
            </picture>
            <Contact />
        </div >
    )
}

export default ContactPage
