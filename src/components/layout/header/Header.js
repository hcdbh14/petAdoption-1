import React from 'react'
import Navigation from '../Navigation'
import HeaderImage from './HeaderImage';
import HeaderToggle from './HeaderToggle';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Header = () => {
    return (
        <div className="header">
            <HeaderImage />
            <div className="header__nav__container">
                <Navigation />
                <Link to={ROUTES.HOME} className="navigation__link">
                    <img src="../../images/logo.png" alt="Logo" className="header__nav__logo"></img>
                </Link>
            </div>
            <HeaderToggle />
        </div>
    )
}

export default Header
