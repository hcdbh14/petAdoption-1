import React from 'react';

const PetCard = ({ name, goodWords, region, age, gender, image }) => {

    const buildAgeDesc = () => {
        var maleOrFemale = ""
        var monthsOrYears = ""

        if (gender === "male") {
            maleOrFemale = "בן"
        } else {
            maleOrFemale = "בת"
        }

        if (age >= 1) {
            monthsOrYears = "שנים"
        } else {
            monthsOrYears = "חודשים"
        }

        return maleOrFemale + " " + age + " " + monthsOrYears;
    }

    const translateRegion = () => {
        if (region === "center") {
            return "מרכז"
        } else if (region === "north") {
            return "צפון"
        } else {
            return "דרום"
        }
    }

    return (
        <div className="petCard">
            <img className="petCard__image" src={`data:image/png;base64, ${image}`} alt="תמונת החיה" />
            <h4 className="petCard__name">{name}</h4>
            <p className="petCard__goodWords">{goodWords}</p>
            <p className="petCard__region">
                <img className="petCard__houseIcon" src={require('../../../images/house.svg')} alt="אייקון של אזור" />
                {translateRegion()}
            </p>
            <p className="petCard__age">
                <img className="petCard__calendarIcon" src={require('../../../images/calendar.svg')} alt="אייקון של לוח שנה" />
                {buildAgeDesc()}
            </p>
            <button className="petCard__detailsButton">פרטים נוספים</button>
        </div >
    )
}

export default PetCard
