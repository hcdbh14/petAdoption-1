import React from 'react'
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
const HeaderToggle = () => {
    return (
        <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navigation-toggle" />
            <label for="navigation-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>
            <div class="navigation__background">&nbsp;</div>

            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item">
                        <Link to={ROUTES.SIGN_IN} className="navigation__link">צוק קשר</Link>
                    </li>
                    <li class="navigation__item">
                        <Link to={ROUTES.SIGN_UP} className="navigation__link">מידע למאמצים</Link>
                    </li>
                    <li class="navigation__item">
                        <Link to={ROUTES.SIGN_IN} className="navigation__link">נהלי האימוץ</Link>
                    </li>
                    <li class="navigation__item">
                        <Link to={ROUTES.SEARCH} className="navigation__link">אבידות ומציאות</Link>
                    </li>
                </ul>
            </nav>


        </div>
    )
}

export default HeaderToggle
