import React from 'react'
import paw from '../../../images/paw.svg'
import loggoText from '../../../images/logo-name.svg'

const Logo = (props) => {
    const { withText, withImage } = props;
    return (
        <div className='header__logo'>
            {withText && <img src={loggoText} alt="Logo" className="header__logo-image" />}
            {withImage && <img src={paw} alt="Logo" className="header__logo-text" />}
        </div>
    )
}

export default Logo
