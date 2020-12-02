import React from 'react';
import ContactUs from '../layout/contact/contactUs';

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
            <ContactUs />
        </div >
    )
}

export default AboutPage