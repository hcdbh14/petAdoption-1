import React from 'react'
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import SignInLinks from './SignInLinks';
const Navigation = () => {


    const makeSticky = () => {
        console.log('hi')
    }
    return (
        <div className="header__nav" onScroll={() => makeSticky}>
            {/* <SignInLinks /> */}

            <div className="header__nav__right">
                <ul className="header__nav__list">
                    <li>
                        <Link to={ROUTES.SIGN_IN} className="header__nav__list-link">צוק קשר</Link>
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
                        <Link to={ROUTES.SIGN_UP} className="header__nav__list-link">אבידות ומציאות</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
