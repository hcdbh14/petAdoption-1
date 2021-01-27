import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">

                <div className="rows">

                    <div className="column">
                        <ul className="footer-list">
                            <li>
                                <Link to={ROUTES.CONTACT}>
                                    <button className="footer-button">צור קשר</button>
                                </Link>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.sospets.co.il/lostandfound">
                                    <button className="footer-button">מוקד אבידות ומציאות</button>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.sospets.co.il/info1">
                                    <button className="footer-button">מידע למאמצים</button>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.sospets.co.il/info2">
                                    <button className="footer-button">מידע למוסרים</button>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="column column--left">
                        <ul className="footer-list">

                            <li>
                                <Link to={ROUTES.ABOUT}>
                                    <button className="footer-button">אודות</button>
                                </Link>
                            </li>
                            <li>
                                <Link to={ROUTES.SEARCH}>
                                    <button className="footer-button">חיפוש בעלי חיים</button>
                                </Link>
                            </li>

                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.sospets.co.il/donations">
                                    <button className="footer-button">תרומות</button>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.sospets.co.il/volunteerin">
                                    <button className="footer-button">התנדבות</button>
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div className="logo-and-social-column">
                        <div className="logo-image"></div>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/">
                            <input type="image" className="socialButton socialButton--bird" src={require('../../../images/twitter.png')} alt="Twitter" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pet.five/">
                            <input type="image" className="socialButton" src={require('../../../images/instagram.png')} alt="Instagram" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/PetFive">
                            <input type="image" className="socialButton" src={require('../../../images/facebook.png')} alt="Facebook" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
