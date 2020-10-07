import React from 'react'
import Navigation from '../Navigation';


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">

                <div className="rows">

                    <div className="colum">
                        <ul className="footer-list">
                            <li>
                                <button className="footer-button">צור קשר</button>
                            </li>
                            <li>
                                <button className="footer-button">מוקד אבידות ומציאות</button>
                            </li>
                            <li>
                                <button className="footer-button">מידע למאמצים</button>
                            </li>
                            <li>
                                <button className="footer-button">מידע למוסרים בע״ח לאימוץ</button>
                            </li>
                        </ul>
                    </div>

                    <div className="colum">
                        <ul className="footer-list">
                            <li>
                                <button className="footer-button">נהלי האימוץ</button>

                            </li>
                            <li>
                                <button className="footer-button">עיקור וסירוס חתולי רחוב</button>
                            </li>

                            <li>
                                <button className="footer-button">תרומות</button>
                            </li>
                            <li>
                                <button className="footer-button">התנדבות</button>
                            </li>
                        </ul>
                    </div>


                    <div className="logo-and-social-colum">

                        <img src="/images/footer-background-with-icon.png" alt="footer-logo" className="logo-image"></img>

                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/">
                            <input type="image" className="socialButton" src='/images/twitter.png' alt="Twitter" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.instgram.com/">
                            <input type="image" className="socialButton" src='/images/instagram.png' alt="Instagram" />
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="http://www.facebook.com/">
                            <input type="image" className="socialButton" src='/images/facebook.png' alt="Facebook" />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
