import React from 'react'
import SearchSection from '../layout/homePage/SearchSection';
import PetsToAdoptSection from '../layout/homePage/PetsToAdoptSection';
import AboutSection from '../layout/homePage/AboutSection';
const HomePage = () => {
    const styleColored = {
        display: 'inline-block', color: '#5ac5d9', marginRight: '2rem'
    }
    const style = {
        display: 'inline-block'
    }
    return (
        
        <div className="main">
            <div className="main__title">
                <h1 style={style}>אמצו אותי גם אני</h1> <h1 style={styleColored}>רוצה בית</h1>
            </div>

            <img src="../../images/mainImage.png" alt="pet with owner" className="main__image" />

            <div className="main__text">
                <p>מאות בעלי חיים מחכים לכם לאימוץ בסניפי עמותת תנו לחיות לחיות ברחבי הארץ.</p>
                <p>בחרו את בעל החיים הרצוי, ובעזרת סינונים השונים תוכלו למקד את החיפוש</p>
                <p>ולמצוא את החיה המתאימה לכם לאימוץ.</p>
            </div>

            <SearchSection />

            <PetsToAdoptSection />
            <AboutSection />
        </div >
    )
}

export default HomePage
