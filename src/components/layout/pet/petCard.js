import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SEARCH, DETAILS } from '../../constants/routes';
import { getAdditionalDetails } from '../../../store/petDetails/action';

const PetCard = ({ pet }) => {

    const dispatch = useDispatch();

    const moveToDetails = () => {
        dispatch(getAdditionalDetails(pet))
    }

    const buildAgeDesc = () => {

        var formattedAge = pet.age
        var maleOrFemale = ""
        var monthsOrYears = ""

        if (pet.gender === "זכר") {
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
        <div className={window.location.href.includes(SEARCH) ? "petCard__search" : "petCard__spotLight"}>
            <img className={window.location.href.includes(SEARCH) ?  "petCard__image" : "petCard__spotLightImage"} src={`data:image/png;base64, ${pet.image}`} alt="תמונת החיה" />
            <h2 className={window.location.href.includes(SEARCH) ? "petCard__nameSearch" : "petCard__nameSpotLight"}>{pet.name}</h2>
            <p className={window.location.href.includes(SEARCH) ? "petCard__goodWordsBlue" : "petCard__goodWordsOrange"}>{pet.goodWords}</p>
            <p className="petCard__region">
                <img className="petCard__houseIcon" src={require('../../../images/house.svg')} alt="אייקון של אזור" />
                {pet.region}
            </p>
            <p className="petCard__age">
                <img className="petCard__calendarIcon" src={require('../../../images/calendar.svg')} alt="אייקון של לוח שנה" />
                {buildAgeDesc()}
            </p>
            
            <Link to={`${DETAILS}?id=${pet.id}`}>
                <button className={window.location.href.includes(SEARCH) ? "petCard__detailsSearch" : "petCard__detailsSpotLight"} onClick={() => moveToDetails()}>פרטים נוספים</button>
            </Link>
        </div >
    )
}

export default PetCard
