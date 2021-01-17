import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdditionalDetails } from '../../../store/petDetails/action';

const PetDetails = () => {

    const dispatch = useDispatch();
    const detailState = useSelector(state => state.detailReducer);

    const saveState = (state) => {
        try {
            const serializedState = JSON.stringify(state);
            localStorage.setItem("state", serializedState);
        } catch (err) {
            console.log(err);
        }
    };


    const loadState = () => {
        try {
            const serializedState = localStorage.getItem("state");
            if (!serializedState) return undefined;
            else return JSON.parse(serializedState);
        } catch (err) {
            return null;
        }
    };

    const loadOrSaveState = () => {
        const loadedPet = loadState()

        if (detailState.pet !== null) {
            saveState(detailState.pet)
        } else if (detailState.pet === null && loadedPet !== null) {
            dispatch(getAdditionalDetails(loadedPet))
        }
    };

    const buildAgeDesc = () => {

        var formattedAge = detailState.pet.age
        var maleOrFemale = ""
        var monthsOrYears = ""

        if (detailState.pet.gender === "זכר") {
            maleOrFemale = "בן"
        } else {
            maleOrFemale = "בת"
        }

        if (detailState.pet.age >= 1) {
            monthsOrYears = "שנים"

        } else {
            monthsOrYears = "חודשים"
            formattedAge = String(detailState.pet.age).split(".")[1];
        }

        return maleOrFemale + " " + formattedAge + " " + monthsOrYears;
    }

    useEffect(loadOrSaveState, [])


    return (

        <>
            {detailState.pet !== null ?
                <div className="petDetails">
                    <div className="petDetails__profile">
                        <p className="petDetails__title">{detailState.pet.petType}, {detailState.pet.name}</p>
                        <p className="petDetails__detail">
                            <img className="petDetails__icon" src={require('../../../images/paw-profile.svg')} alt="אייקון של רגל בעל חיים" />
                            {detailState.pet.race}
                        </p>
                        <p className="petDetails__detail">
                            <img className="petDetails__icon" src={require('../../../images/cake-profile.svg')} alt="אייקון של עוגה" />
                            {buildAgeDesc()}
                        </p>
                        <p className="petDetails__detail">
                            <img className="petDetails__icon" src={require('../../../images/location-profile.svg')} style={{ width: '30px', height: '37px' }} alt="אייקון של מיקום" />
                              אזור:   {detailState.pet.region}
                        </p>

                        <p className="petDetails__detail">
                            <img className="petDetails__icon" src={require('../../../images/phone-profile.svg')} style={{ width: '30px', height: '30px' }} alt="אייקון של טלפון" />
                            טלפון: {detailState.pet.phoneNumber}
                        </p>

                        <p className="petDetails__title">קצת עלי</p>
                        <p className="petDetails__detail">
                            {detailState.pet.description}
                        </p>
                        <p className="petDetails__title">מתאים ל</p>
                        <p className="petDetails__detail">
                            {detailState.pet.suitables}
                        </p>

                        <p className="petDetails__iAm">
                            <img className="petDetails__icon" src={require('../../../images/checked.svg')} style={{ width: '30px', height: '30px' }} alt="מסומן" />
                            טלפון: {detailState.pet.phoneNumber}
                        </p>


                        <p className="petDetails__iAm">
                            <img className="petDetails__icon" src={require('../../../images/notChecked.svg')} style={{ width: '30px', height: '30px' }} alt="לא מסומן" />
                            טלפון: {detailState.pet.phoneNumber}
                        </p>
                        <h1 style={{ color: "black" }}>{detailState.pet.goodWords}</h1>
                        <h1 style={{ color: "black" }}>{detailState.pet.phoneNumber}</h1>
                        <h1 style={{ color: "black" }}>{detailState.pet.poopTrained}</h1>
                        <h1 style={{ color: "black" }}>{detailState.pet.race}</h1>
                        <h1 style={{ color: "black" }}>{detailState.pet.region}</h1>
                        <h1 style={{ color: "black" }}>{detailState.pet.size}</h1>
                        <h1 style={{ color: "black" }}>{detailState.pet.suitables}</h1>
                        <h1 style={{ color: "black" }}>{detailState.pet.postDate}</h1>
                        <h1 style={{ color: "black" }}>{detailState.pet.petType}</h1>
                        <h1 style={{ color: "black" }}>{detailState.pet.shelter_id}</h1>
                        <h1 style={{ color: "black" }}>{detailState.pet.vaccinated}</h1>
                        <h1 style={{ color: "black" }}>{detailState.pet.ageGroup}</h1>
                        <img className="petCard__image" src={`data:image/png;base64, ${detailState.pet.image}`} alt="תמונת החיה" />

                        {detailState.imagesError !== "" ?
                            <h1>error</h1>
                            : (detailState.imagesLoading ?
                                <h1>images loading</h1>
                                :
                                <h1>images ready!</h1>
                            )}

                        {detailState.shelterError !== "" ?
                            <h1>error</h1>
                            : (detailState.shelterLoading ?
                                <h1>shelter loading</h1>
                                :
                                <h1>shelter ready!</h1>
                            )}
                    </div>

                    <div className="petDetails__imageSection">
                        <h1>test</h1>
                    </div>
                </div>
                :
                <div />
            }
        </>
    )
}

export default PetDetails
