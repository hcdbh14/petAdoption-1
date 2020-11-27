import React from 'react'
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import SignInLinks from './SignInLinks';
const Navigation = () => {
    return (
        <div className="header__nav" >

            <div className="header__nav__right">
                <ul className="header__nav__list">
                    <li>
                        <Link to={ROUTES.SIGN_IN} className="header__nav__list-link">צור קשר</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.SIGN_UP} className="header__nav__list-link">מידע למאמצים</Link>
                    </li>
                </ul>
            </div>
            {/* <img src="../../images/logo.png" alt="Logo" className="header__nav__logo" /> */}
            <div className="header__nav__left">
                <ul className="header__nav__list">
                    <li>
                        <Link to={ROUTES.SIGN_IN} className="header__nav__list-link">נהלי האימוץ</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.SEARCH} className="header__nav__list-link">חיפוש חיות לאימוץ</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
