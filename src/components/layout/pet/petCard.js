import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SEARCH, DETAILS } from '../../constants/routes';
import { getAdditionalDetails } from '../../../store/petDetails/action';

const PetCard = ({ pet }) => {
    
    const dispatch = useDispatch();

    const moveToDetails = () => {
        console.log(pet)
        dispatch(getAdditionalDetails(pet))
    }

    const buildAgeDesc = () => {

        var formattedAge = pet.age
        var maleOrFemale = ""
        var monthsOrYears = ""

        if (pet.gender === "male") {
            maleOrFemale = "בן"
        } else {
            maleOrFemale = "בת"
        }

        if (pet.age >= 1) {
            monthsOrYears = "שנים"

        } else {
            monthsOrYears = "חודשים"
            formattedAge = String(pet.age).split(".")[1];
        }

        return maleOrFemale + " " + formattedAge + " " + monthsOrYears;
    }

    return (
        <div className={window.location.href.includes(SEARCH) ? "petCard__bigMargin" : "petCard__smallMargin"}>
            <img className="petCard__image" src={`data:image/png;base64, ${pet.image}`} alt="תמונת החיה" />
            <h4 className={window.location.href.includes(SEARCH) ? "petCard__nameBlue" : "petCard__nameOrange"}>{pet.name}</h4>
            <p className={window.location.href.includes(SEARCH) ? "petCard__goodWordsBlue" : "petCard__goodWordsOrange"}>{pet.goodWords}</p>
            <p className="petCard__region">
                <img className="petCard__houseIcon" src={require('../../../images/house.svg')} alt="אייקון של אזור" />
                {pet.region}
            </p>
            <p className="petCard__age">
                <img className="petCard__calendarIcon" src={require('../../../images/calendar.svg')} alt="אייקון של לוח שנה" />
                {buildAgeDesc()}
            </p>
            <Link to={DETAILS}>
                <button className={window.location.href.includes(SEARCH) ? "petCard__detailsOrange" : "petCard__detailsBlue"} onClick={() => moveToDetails()}>פרטים נוספים</button>
            </Link>
        </div >
    )
}

export default PetCard
