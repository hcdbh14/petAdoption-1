import React from 'react'
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';
import HeaderImage from './HeaderImage';


const Header = () => {
    return (
        <div className="header">
            <HeaderImage />
            <div className="header__nav__container">
                <Navigation />
                <img src="../../images/logo.png" alt="Logo" className="header__nav__logo" />

            </div>

        </div>
    )
}

export default Header
