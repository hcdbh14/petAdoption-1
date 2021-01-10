import React from 'react';
import { Link } from 'react-router-dom';
import { SEARCH, DETAILS } from '../../constants/routes';

const PetCard = ({ name, goodWords, region, age, gender, image, i }) => {
    const buildAgeDesc = () => {

        var formattedAge = age
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
            formattedAge = String(age).split(".")[1];
        }

        return maleOrFemale + " " + formattedAge + " " + monthsOrYears;
    }

    return (
        <div className={window.location.href.includes(SEARCH) ? "petCard__bigMargin" : "petCard__smallMargin"} id={i ? i : null}>
            <img className="petCard__image" src={`data:image/png;base64, ${image}`} alt="תמונת החיה" />
            <h4 className={window.location.href.includes(SEARCH) ? "petCard__nameBlue" : "petCard__nameOrange"}>{name}</h4>
            <p className={window.location.href.includes(SEARCH) ? "petCard__goodWordsBlue" : "petCard__goodWordsOrange"}>{goodWords}</p>
            <p className="petCard__region">
                <img className="petCard__houseIcon" src={require('../../../images/house.svg')} alt="אייקון של אזור" />
                {region}
            </p>
            <p className="petCard__age">
                <img className="petCard__calendarIcon" src={require('../../../images/calendar.svg')} alt="אייקון של לוח שנה" />
                {buildAgeDesc()}
            </p>
            <Link to={DETAILS}>
                <button className={window.location.href.includes(SEARCH) ? "petCard__detailsOrange" : "petCard__detailsBlue"}>פרטים נוספים</button>
            </Link>
        </div >
    )
}

export default PetCard
