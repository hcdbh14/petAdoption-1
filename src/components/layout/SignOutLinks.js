import React from 'react'
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
const SignOutLinks = (props) => {
    return (
        <ul className="navigation__list">
            <li>
                <Link to={ROUTES.SIGN_IN} className="navigation__list__link">Sign Out</Link>
            </li>
            <li>
                <Link to={ROUTES.HOME} className="navigation__list__link">Home</Link>
            </li>
            <li>
                <Link to={ROUTES.PET} className="navigation__list__link">Pet</Link>
            </li>
            <li>
                <Link to={ROUTES.ACCOUNT} className="navigation__list__link">Account</Link>
            </li>
            <li>
                <Link to={ROUTES.ADMIN} className="navigation__list__link">Admin</Link>
            </li>
        </ul>
    )
}

export default SignOutLinks
