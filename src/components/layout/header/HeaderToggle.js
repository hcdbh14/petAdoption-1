import React from 'react'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const HeaderToggle = () => {

    const closeWindow = () => {
        document.getElementById('navigation-toggle').click()
    }

    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navigation-toggle" />
            <label htmlFor="navigation-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">

                    <li onClick={closeWindow}>
                        <Link to={ROUTES.HOME} className="navigation__link">ראשי</Link>
                    </li>
                    <li onClick={closeWindow}>
                        <Link to={ROUTES.SEARCH} className="navigation__link">כל החיות</Link>
                    </li>
                    <li onClick={closeWindow}>
                        <Link to={ROUTES.ABOUT} className="navigation__link">אודות</Link>
                    </li>
                    <li onClick={closeWindow}>
                        <Link to={ROUTES.CONTACT} className="navigation__link">צור קשר</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderToggle
