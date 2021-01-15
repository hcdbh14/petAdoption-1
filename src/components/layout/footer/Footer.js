import React from 'react'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">

                <div className="rows">

                    <div className="column">
                        <ul className="footer-list">
                            <li>
                                <button className="footer-button">צור קשר</button>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.sospets.co.il/lostandfound">
                                    <button className="footer-button">מוקד אבידות ומציאות</button>
                                </a>
                            </li>
                            <li>
                                <button className="footer-button">מידע למאמצים</button>
                            </li>
                            <li>
                                <button className="footer-button">מידע לוסרים</button>
                            </li>
                        </ul>
                    </div>

                    <div className="column column--left">
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


                    <div className="logo-and-social-column">
                        <div className="logo-image"></div>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/">
                            <input type="image" className="socialButton socialButton--bird" src={require('../../../images/twitter.png')} alt="Twitter" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.instgram.com/">
                            <input type="image" className="socialButton" src={require('../../../images/instagram.png')} alt="Instagram" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.facebook.com/">
                            <input type="image" className="socialButton" src={require('../../../images/facebook.png')} alt="Facebook" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
