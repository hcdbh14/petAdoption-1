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

    const maleOrFemale = (textType) => {
        if (textType === "vaccinated") {
            if (detailState.pet.gender === "זכר") {
                return "אני מחוסן"
            } else {
                return "אני מחוסנת"
            }
        } else {
            if (detailState.pet.gender === "זכר") {
                return "אני מחונך לצרכים"
            } else {
                return "אני מחונכת לצרכים"
            }
        }
    }

    const test = () => {
        var modal = document.getElementById("imageViewerId");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementById("myImg");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }
    };

    useEffect(loadOrSaveState, [])


    return (

        <>
            <div id="imageViewerId" class="imageViewer">

                <span class="close">&times;</span>

                <img class="imageViewerContent" id="img01" />

                <div id="caption"></div>
            </div>
            
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
                            {detailState.pet.vaccinated === 1 ?
                                <img className="petDetails__checkBoxIcon" src={require('../../../images/checked.png')} alt="מסומן" />
                                :
                                <img className="petDetails__checkBoxIcon" src={require('../../../images/notChecked.png')} alt="לא מסומן" />
                            }
                            {maleOrFemale("vaccinated")}
                        </p>


                        <p className="petDetails__iAm">
                            {detailState.pet.poopTrained === 1 ?
                                <img className="petDetails__checkBoxIcon" src={require('../../../images/checked.png')} alt="מסומן" />
                                :
                                <img className="petDetails__checkBoxIcon" src={require('../../../images/notChecked.png')} alt="לא מסומן" />
                            }
                            {maleOrFemale("poopTrained")}
                        </p>
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
                        <img className="petDetails__road" src={require('../../../images/desc-line-road.svg')} alt="שרטוט של דרך" />
                    </div>

                    <div className="petDetails__imageSection">

                        <div className="petDetails__topWrapper">
                            <img className="petDetails__topImage" src={`data:image/png;base64, ${detailState.pet.image}`} alt="תמונת בעל החיים" />
                        </div>

                        {detailState.images.length === 0 ?
                            <div />
                            :
                            <div className="petDetails__middleWrapper">
                                <img className="petDetails__middleImage" src={`data:image/png;base64, ${detailState.images[0].image}`} alt="תמונת בעל החיים" />
                            </div>
                        }
                        {detailState.images.length === 0 ?
                            <div />
                            :

                            <img onClick={test} className="petDetails__bottomImage" id="myImg" src={`data:image/png;base64, ${detailState.images[1].image}`} alt="תמונת בעל החיים" />
                        }
                    </div>


                </div>
                :
                <div />
            }
        </>
    )
}

export default PetDetails
