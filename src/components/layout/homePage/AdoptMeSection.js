import React, { useState, useEffect } from 'react'

const AdoptMeSection = (props) => {
    const { styleColored, style } = props;

    const [isExpand, setIsExpand] = useState(false)
    const handleClick = () => {
        setIsExpand(!isExpand)
    }
    return (
        <>
            <div className="main__title">
                <h2 style={style}>אמצו אותי גם אני</h2> <h2 className="blue-text" style={styleColored}>רוצה בית</h2>
            </div>

            <img src={require('../../../images/mainImage.png')} alt="pet with owner" className="main__image" />

            <div className="main__text">
                {/* <p class="accordion">מאות בעלי חיים מחכים לכם לאימוץ בסניפי עמותת תנו לחיות לחיות ברחבי הארץ.</p>
                {isExpand && <div class="panel">
                    <p>בחרו את בעל החיים הרצוי, ובעזרת סינונים השונים תוכלו למקד את החיפוש</p>
                    <p>ולמצוא את החיה המתאימה לכם לאימוץ.</p>
                </div>
                }
                {!isExpand && <button onClick={handleClick}>V</button>} */}


                <input type="checkbox" id="title" />
                <label for="title">מאות בעלי חיים מחכים לכם לאימוץ בסניפי עמותת תנו לחיות לחיות ברחבי הארץ.</label>

                <div className="content">
                    <p>בחרו את בעל החיים הרצוי, ובעזרת סינונים השונים תוכלו למקד את החיפוש</p>
                    <p>ולמצוא את החיה המתאימה לכם לאימוץ.</p>
                </div>
            </div>
        </>
    )
}

export default AdoptMeSection
