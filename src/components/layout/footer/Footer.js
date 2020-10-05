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
                    <img className="socialButton" src='/images/twitter.png' alt="Twitter" />
                    <img className="socialButton" src='/images/instagram.png' alt="Instagram" />
                    <img className="socialButton" src='/images/facebook.png' alt="Facebook" />
                </div>

            </div>

        </div>
    )
}

export default Footer
