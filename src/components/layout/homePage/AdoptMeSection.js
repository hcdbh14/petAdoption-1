import React from 'react'

const AdoptMeSection = (props) => {
    const { styleColored, style } = props;

    return (
        <>
            <div className="main__title">
                <h2 style={style}>אמצו אותי גם אני</h2> <h2 className="blue-text" style={styleColored}>רוצה בית</h2>
            </div>
            <div className="adoptMe-section">
                <div className="adoptMe-section__topImage">
                    <img src={require('../../../images/pets-peeking.png')} alt="pet with owner" className="main__image" />
                </div>
                <div className="main__text">
                    <p className="adoptMe-section__title">מאות בעלי חיים מחכים לכם לאימוץ בסניפי עמותת תנו לחיות לחיות ברחבי הארץ.</p>

                    <div className="adoptMe-section__content">
                        <p>בחרו את בעל החיים הרצוי, ובעזרת סינונים השונים תוכלו למקד את החיפוש</p>
                        <p>ולמצוא את החיה המתאימה לכם לאימוץ.</p>
                    </div>
                </div>
                <div className="adoptMe-section__work-with-us">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AdoptMeSection
