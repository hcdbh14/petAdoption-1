import React from 'react'

const AdoptMeSection = (props) => {
    const { styleColored, style } = props;
    return (
        <>
            <div className="main__title">
                <h2 style={style}>אמצו אותי גם אני</h2> <h2 style={styleColored}>רוצה בית</h2>
            </div>

            <img src={require('../../../images/mainImage.png')} alt="pet with owner" className="main__image" />

            <div className="main__text">
                <p>מאות בעלי חיים מחכים לכם לאימוץ בסניפי עמותת תנו לחיות לחיות ברחבי הארץ.</p>
                <p>בחרו את בעל החיים הרצוי, ובעזרת סינונים השונים תוכלו למקד את החיפוש</p>
                <p>ולמצוא את החיה המתאימה לכם לאימוץ.</p>
            </div>
        </>
    )
}

export default AdoptMeSection
