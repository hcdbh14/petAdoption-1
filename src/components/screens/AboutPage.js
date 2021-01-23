import React, { useEffect } from 'react';
import Contact from '../layout/contact/Contact';

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="about">
            <div className="about__container">
                <h1 className="about__blueTitle">אז מי אנחנו?</h1>
                <p className="about__paragraph">
            פטפייב הוא פרוייקט שנועד לעזור לחיות מחמד למצוא בית חם ואוהב,<br />
           לעזור לעמותות לפרסם את הבעלי חיים שנמצאים בטיפולם<br />
           ולהקל על מאמצים למצוא את החיית מחמד שתתאים להם.<br />
                    האתר התחיל בתור פרוייקט למידה, אך גדל במהרה,<br />
            עד שבסוף עלה לאוויר ב-2021.<br />
            כיום אנחנו ממשיכים להוסיף תכנים לאתר ולשפר את החוויה.<br />
            <br />

          פיתוח תוכנה - קני קורוצקין, עמית אשדוד<br />
            עיצוב גרפי -   סשה בוגדנוב <br />
           <br />
            </p>
                <h1 className="about__orangeTitle">מה אתם צריכים לעשות?</h1>
                <p className="about__paragraph">
                    לפתוח את הלב ולאמץ חבר חדש <br />
                שיכניס לכם טונות של אושר לחיים.
            </p>
            </div>
            <Contact />
        </div >
    )
}

export default AboutPage
