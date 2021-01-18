import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdditionalDetails } from '../../../store/petDetails/action';

const PetDetails = () => {

    var currentImage = -1
    // const [gallaryIndex, setGallaryIndex] = useState(0);
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

    const setGallaryCount = () => {
        var gallaryCount = document.getElementById("gallaryCount");
        gallaryCount.textContent = (currentImage + 2) + "/" + (detailState.images.length + 1)
    }

    const showImageFull = (index) => {
        var modal = document.getElementById("imageViewerId");
        var modalImg = document.getElementById("fullImage");
        var captionText = document.getElementById("caption");

        modal.style.display = "block";
        if (index === -1) {
            currentImage = -1
            modalImg.src = `data:image/png;base64, ` + detailState.pet.image;
        } else {
            currentImage = index
            modalImg.src = `data:image/png;base64, ` + detailState.images[index].image;
        }
        captionText.innerHTML = detailState.pet.name;
        setGallaryCount()
        var span = document.getElementsByClassName("close")[0];

        span.onclick = function () {
            modal.style.display = "none";
        }
    };

    const nextImage = () => {
        var modalImg = document.getElementById("fullImage");

        if (detailState.images.length !== currentImage + 1) {
            currentImage = currentImage + 1
            modalImg.src = `data:image/png;base64, ` + detailState.images[currentImage].image;
        }

        if (detailState.images.length === currentImage) {
            currentImage = currentImage - 1
        }
        setGallaryCount()
    }

    const previousImage = () => {
        var modalImg = document.getElementById("fullImage");

        if (currentImage > 0) {
            currentImage = currentImage - 1
            modalImg.src = `data:image/png;base64, ` + detailState.images[currentImage].image;
        } else {
            currentImage = - 1
            modalImg.src = `data:image/png;base64, ` + detailState.pet.image;
        }
        setGallaryCount()
    }

    useEffect(loadOrSaveState, [])


    return (
        <>
            <div id="imageViewerId" class="imageViewer">
                <span className="close">&times;</span>
                <h2 id="gallaryCount" className="numberOfImages">1/1</h2>
                <div style={{ display: 'flex' }}>
                    <button className="arrow" onClick={nextImage} >
                        ➥
                </button>

                    <img className="imageViewerContent" id="fullImage" alt="תמונה מלאה" />

                    <button className="arrow" style={{ transform: 'scaleX(-1)' }} onClick={previousImage}>
                        ➥
                </button>
                </div>
                <div id="caption" />
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
                            : (detailState.images.length === 0 ?
                                <div />
                                :
                                <button className="petDetails__allImagesButton">תמונות נוספות</button>
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
                            <img onClick={() => showImageFull(-1)} id="topImage" className="petDetails__topImage" src={`data:image/png;base64, ${detailState.pet.image}`} alt="תמונת בעל החיים" />
                        </div>

                        {detailState.images.length === 0 ?
                            <div />
                            :
                            <div className="petDetails__middleWrapper">
                                <img onClick={() => showImageFull(0)} id="middleImage" className="petDetails__middleImage" src={`data:image/png;base64, ${detailState.images[0].image}`} alt="תמונת בעל החיים" />
                            </div>
                        }
                        {detailState.images.length === 0 ?
                            <div />
                            :

                            <img onClick={() => showImageFull(1)} id="bottomImage" className="petDetails__bottomImage" src={`data:image/png;base64, ${detailState.images[1].image}`} alt="תמונת בעל החיים" />
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
