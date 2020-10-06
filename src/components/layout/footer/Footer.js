import React from 'react'
import Navigation from '../Navigation';


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">

                <div className="rows">

                    <div className="colum">
                        <ul className="footer-list">
                            <li>צור קשר</li>
                            <li>מוקד אבידות ומציאות</li>
                            <li>מידע למאמצים</li>
                            <li>מידע למוסרים בע״ח לאימוץ</li>
                        </ul>
                    </div>

                    <div className="colum">
                        <ul className="footer-list">
                            <li>נהלי האימוץ</li>
                            <li>עיקור וסירוס חתולי רחוב</li>
                            <li>תרומות</li>
                            <li>התנדבות</li>
                        </ul>
                    </div>
                </div>

                <div className="socialPlaformButtons">


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
    )
}

export default Footer
