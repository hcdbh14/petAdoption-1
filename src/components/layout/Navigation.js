import React from 'react'
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import SignInLinks from './SignInLinks';
const Navigation = () => {
    return (
        <div className="header__nav" >
            <ul className="header__nav__list">
                <li>
                    <Link to={ROUTES.SIGN_IN} className="header__nav__list-link">ראשי</Link>
                </li>
                <li>
                    <Link to={ROUTES.SIGN_UP} className="header__nav__list-link">חיות אחרות</Link>
                </li>
                <li>
                    <Link to={ROUTES.SIGN_IN} className="header__nav__list-link">אודות</Link>
                </li>
                <li>
                    <Link to={ROUTES.SEARCH} className="header__nav__list-link">צור קשר</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
