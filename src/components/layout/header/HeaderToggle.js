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

                    <li>
                        <Link to={ROUTES.HOME} className="navigation__link">ראשי</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.SEARCH} className="navigation__link">כל החיות</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.ABOUT} className="navigation__link">אודות</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.CONTACT} className="navigation__link">צור קשר</Link>
                    </li>
                </ul>
            </nav>


        </div>
    )
}

export default HeaderToggle
