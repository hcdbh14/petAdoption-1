import React from 'react';
import Contact from '../layout/contact/Contact';
import AdoptMeSection from '../layout/homePage/AdoptMeSection';

const AboutPage = () => {
    return (
        <div className="about">
            <div className="about__container">
                <h1 className="about__blueTitle">אז מי אנחנו?</h1>
                <p className="about__paragraph">
                    אנחנו מאמינים שכלבים וחתולים הם הרבה מעבר לחיות <br />
            מחמד - הם חלק בלתי נפרד מהמשפחה, וכל יום במחיצתם <br />
            הוא כיף גדול וחוויה חדשה שמשדרגת את איכות החיים <br />
            וממלאת אותה בשמחה, חום ואהבה. <br />
            האהבה הזאת, היא שגורמת לנו לרצות, בכל יום מחדש, <br />
            לעזור להפוך את החיים שלהם לטובים ובריאים יותר.
            </p>
                <h1 className="about__orangeTitle">מה אתם צריכים לעשות?</h1>
                <p className="about__paragraph">
                    לפתוח את הלב ולאמץ חבר חדש <br />
                שיכניס לכם טונות של אושר לחיים.
            </p>
            </div>
            <Contact />
            <AdoptMeSection />
        </div >
    )
}

export default AboutPage
