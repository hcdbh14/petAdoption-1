import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdditionalDetails } from '../../../store/petDetails/action';
import ShelterDetails from './ShelterDetails';

const PetDetails = () => {

    var currentImage = -1
    const dispatch = useDispatch();
    const detailState = useSelector(state => state.detailReducer);
    const [recordWidth, setRecordWidth] = useState(window.innerWidth)
    const [loaded, setLoaded] = useState(false)
    const renderImage = () => {
        setRecordWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", renderImage);
        return () => { window.removeEventListener("resize", renderImage); }
    }, [])


    const renderForMobile = () => {
        if (recordWidth <= 900) {
            if (loaded === false) {
                console.log(recordWidth)
                showImageFull(-1);
                setLoaded(true)
            }
        } else {
            if (loaded === true) {
                setLoaded(false)
                var modal = document.getElementById("imageViewerId");
                modal.style.display = "none";
            }
        }
    }


    const loadFromLink = () => {
        if (detailState.pet === null) {
            let search = window.location.search;
            let params = new URLSearchParams(search);
            let id = params.get('id');
            dispatch(getAdditionalDetails(null, id))
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
        if (detailState.images.length !== 0) {
            var gallaryCount = document.getElementById("gallaryCount");
            gallaryCount.textContent = (currentImage + 2) + "/" + (detailState.images.length + 1)
        }
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

    useEffect(loadFromLink, [])


    return (
        <div style={{ background: '#e7e3d7', paddingBottom: '150px' }}>
            {detailState.pet !== null ?
                <div>
                    <div id="imageViewerId" className="imageViewer" ref={renderForMobile}>
                        <span className="close">&times;</span>
                        {detailState.images.length > 0 ?
                            <h2 id="gallaryCount" className="numberOfImages">{'1/' + (detailState.images.length + 1)}</h2>
                            :
                            <div />
                        }
                        <div className="gallaryWrapper">

                            <button className="arrowRight" onClick={nextImage} >
                                <p className="arrowText">➥</p></button>
                            <img className="imageViewerContent" id="fullImage" alt="תמונה מלאה" />

                            <button className="arrowLeft" style={{ transform: 'scaleX(-1)' }} onClick={previousImage}>
                                <p className="arrowText">➥</p></button>
                        </div>
                        <div id="caption" />
                    </div>

                    <div className="petDetails">
                        <div className="petDetails__profile">
                            <p className="petDetails__title" style={{ marginBottom: '1vw' }}>{detailState.pet.petType}, {detailState.pet.name}</p>

                            {detailState.pet.race !== "" ?
                                <p className="petDetails__detail">
                                    <img className="petDetails__icon" src={require('../../../images/paw-profile.svg')} alt="אייקון של רגל בעל חיים" />
                                    {detailState.pet.race}
                                </p>
                                :
                                <div />
                            }
                            <p className="petDetails__detail">
                                <img className="petDetails__icon" src={require('../../../images/gender.svg')} alt="אייקון של רגל בעל חיים" />
                                {detailState.pet.gender}
                            </p>

                            <p className="petDetails__detail">
                                <img className="petDetails__icon" src={require('../../../images/size.svg')} alt="אייקון של גובה" />
                                {detailState.pet.size}
                            </p>
                            <p className="petDetails__detail">
                                <img className="petDetails__icon" src={require('../../../images/cake-profile.svg')} alt="אייקון של עוגה" />
                                {buildAgeDesc()}
                            </p>

                            <p className="petDetails__detail">
                                <img className="petDetails__icon" src={require('../../../images/location-profile.svg')}  alt="אייקון של מיקום" />
                              אזור:   {detailState.pet.region}
                            </p>

                            <p className="petDetails__detail">
                                <img className="petDetails__icon" src={require('../../../images/phone-profile.svg')}  alt="אייקון של טלפון" />
                            טלפון: {detailState.pet.phoneNumber}
                            </p>

                            {detailState.pet.description !== "" ?
                                <div>
                                    <p className="petDetails__title">קצת עלי</p>
                                    <p className="petDetails__detail">
                                        {detailState.pet.description}
                                    </p>
                                </div>
                                :
                                <div />
                            }

                            {detailState.pet.suitables !== "" ?
                                <div>
                                    <p className="petDetails__title">מתאים ל</p>
                                    <p className="petDetails__detail">
                                        {detailState.pet.suitables}
                                    </p>
                                </div>
                                :
                                <div />
                            }
                            <div className="petDetails__iAmWrapper">
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
                            </div>
                            {detailState.imagesError !== "" ?
                                <h1>error</h1>
                                : (detailState.images.length === 0 || recordWidth < 900 ?
                                    <div />
                                    :
                                    <button onClick={() => showImageFull(-1)} className="petDetails__allImagesButton">תמונות נוספות</button>
                                )}

                        </div>

                        <div className="petDetails__imageSection">

                            <div className="petDetails__topWrapper">
                            <img onClick={() => showImageFull(-1)} id="topImage" className="petDetails__topImage" src={`data:image/png;base64, ${detailState.pet.image}`} alt="תמונת בעל החיים" />
                            {detailState.images.length > 0 ?
                                <img onClick={() => showImageFull(0)} id="bottomImage" className="petDetails__bottomImage" src={`data:image/png;base64, ${detailState.images[0].image}`} alt="תמונת בעל החיים" />
                                :
                                <div />
                            }

                            </div>

                            {detailState.images.length > 1 ?
                                <div className="petDetails__middleWrapper">
                                    <img onClick={() => showImageFull(1)} id="middleImage" className="petDetails__middleImage" src={`data:image/png;base64, ${detailState.images[1].image}`} alt="תמונת בעל החיים" />
                                </div>
                                :
                                <div />
                            }

                        </div>

                    </div>


                    {detailState.shelterError !== "" ?
                        <h1>error</h1>
                        : (detailState.shelter !== null && detailState.shelterLoading === false  ?
                       
                            <ShelterDetails />
                            :
                            <div />
                        )}
                </div>
                :
                <div />
            }
        </div>
    )
}

export default PetDetails
