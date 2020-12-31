import React from 'react'
import paw from '../../../images/paw.svg'

const Logo = (props) => {
    const { withImage } = props;
    return (
        <div className='header__logo'>
            {withImage && <img src={paw} alt="Logo" className="header__logo-text" />}
        </div>
    )
}

export default Logo
