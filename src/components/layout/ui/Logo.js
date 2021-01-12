import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => { 

    return (
        <div className='header__logo'>
                        <Link to="/">
            <div alt="לוגו" className="header__logo" />
            </Link>
        </div>
    )
}

export default Logo
