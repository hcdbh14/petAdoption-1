import React from 'react'
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import SignInLinks from './SignInLinks';
const Navigation = () => {
    return (
        <div className="header__nav" >
            <ul className="header__nav__list">
                <li>
                    <Link to={ROUTES.HOME} className="header__nav__list-link">ראשי</Link>
                </li>
                <li>
                    <Link to={ROUTES.SEARCH} className="header__nav__list-link">כל החיות</Link>
                </li>
                <li>
                    <Link to={ROUTES.ABOUT} className="header__nav__list-link">אודות</Link>
                </li>
                <li>
                    <Link to={ROUTES.CONTACT} className="header__nav__list-link">צור קשר</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation
