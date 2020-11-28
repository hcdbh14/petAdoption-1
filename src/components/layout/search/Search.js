import React from 'react'

const Search = () => {
    return (
        <div className="search">
            <div className="search__title">
                <p>נמצאו 100 </p>
                <div class="dropdown">
                    <button class="dropbtn">חיות</button>
                    <div class="dropdown-content">
                        <a href="#">חיות</a>
                        <a href="#">כלבים</a>
                        <a href="#">חתולים</a>
                    </div>
                </div>
                <p> שמחכות לאימוץ באזור</p>
                <div class="dropdown">
                    <button class="dropbtn">כל בארץ</button>
                    <div class="dropdown-content">
                        <a href="#">כל בארץ</a>
                        <a href="#">צפון</a>
                        <a href="#">מרכז</a>
                        <a href="#">דרום</a>
                    </div>
                </div>
            </div>

            <div className="search__box">
                <div className="search__box__advanced">
                    <p className="search__box__advanced__title">חיפוש מתקדם</p>

                    <div class="wrap-collabsible">
                        <input id="collapsible1" class="toggle" type="checkbox" />
                        <label for="collapsible1" class="lbl-toggle">לפי שם</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <div class="wrap">
                                    <div class="name-search">
                                        <input type="text" class="searchTerm" placeholder="ספלאנק" />
                                        <img src={require('../../../images/search-icon.png')} alt="Logo" className="searchButton" />

                                    </div>
                                    <button class="update-button">חיפוש</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="wrap-collabsible">
                        <input id="collapsible2" class="toggle" type="checkbox" />
                        <label for="collapsible2" class="lbl-toggle">סוג חייה</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <button className="filterButton">כולם (100)</button>
                                <button className="filterButton">כלב (25)</button>
                                <button className="filterButton">חתול (63)</button>
                            </div>
                        </div>
                    </div>

                    <div class="wrap-collabsible">
                        <input id="collapsible3" class="toggle" type="checkbox" />
                        <label for="collapsible3" class="lbl-toggle">אזור</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <button className="filterButton">צפון (33)</button>
                                <button className="filterButton">מרכז (78)</button>
                                <button className="filterButton">דרום (11)</button>
                            </div>
                        </div>
                    </div>

                    <div class="wrap-collabsible">
                        <input id="collapsible4" class="toggle" type="checkbox" />
                        <label for="collapsible4" class="lbl-toggle">מין</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <button className="filterButton">זכר (53)</button>
                                <button className="filterButton">נקבה (54)</button>
                            </div>
                        </div>
                    </div>

                    <div class="wrap-collabsible">
                        <input id="collapsible5" class="toggle" type="checkbox" />
                        <label for="collapsible5" class="lbl-toggle">גיל</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <button className="filterButton">צעיר (22)</button>
                                <button className="filterButton">בוגר (45)</button>
                                <button className="filterButton">מבוגר (30)</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pets">
                    <button className="pet-card">
                        <img src={require('../../../images/dogy.jpg')} className="pet-preview-image" />
                        <p className="pet-name-preview">דניאל</p>
                        <div className="description-preview">
                            <img src={require('../../../images/heart.png')} className="pet-heart-preview" />
                            <p className="pet-desc-preview">כלב בינוני בן 5 שנים</p>
                        </div>
                        <p className="pet-goodWords-preview">אני אוהב לשחק</p>

                        <div className="description-preview">
                            <img src={require('../../../images/location.png')} className="pet-heart-preview" />
                            <p className="pet-desc-preview">מרכז</p>
                        </div>
                    </button>

                    <button className="pet-card">
                        <img src={require('../../../images/dogy.jpg')} className="pet-preview-image" />
                        <p className="pet-name-preview">דניאל</p>
                        <div className="description-preview">
                            <img src={require('../../../images/heart.png')} className="pet-heart-preview" />
                            <p className="pet-desc-preview">כלב בינוני בן 5 שנים</p>
                        </div>
                        <p className="pet-goodWords-preview">אני אוהב לשחק</p>

                        <div className="description-preview">
                            <img src={require('../../../images/location.png')} className="pet-heart-preview" />
                            <p className="pet-desc-preview">מרכז</p>
                        </div>
                    </button>

                    <button className="pet-card">
                        <img src={require('../../../images/dogy.jpg')} className="pet-preview-image" />
                        <p className="pet-name-preview">דניאל</p>
                        <div className="description-preview">
                            <img src={require('../../../images/heart.png')} className="pet-heart-preview" />
                            <p className="pet-desc-preview">כלב בינוני בן 5 שנים</p>
                        </div>
                        <p className="pet-goodWords-preview">אני אוהב לשחק</p>

                        <div className="description-preview">
                            <img src={require('../../../images/location.png')} className="pet-heart-preview" />
                            <p className="pet-desc-preview">מרכז</p>
                        </div>
                    </button>

                    <button className="pet-card">
                        <img src={require('../../../images/dogy.jpg')} className="pet-preview-image" />
                        <p className="pet-name-preview">דניאל</p>
                        <div className="description-preview">
                            <img src={require('../../../images/heart.png')} className="pet-heart-preview" />
                            <p className="pet-desc-preview">כלב בינוני בן 5 שנים</p>
                        </div>
                        <p className="pet-goodWords-preview">אני אוהב לשחק</p>

                        <div className="description-preview">
                            <img src={require('../../../images/location.png')} className="pet-heart-preview" />
                            <p className="pet-desc-preview">מרכז</p>
                        </div>
                    </button>


                    <button className="pet-card">
                        <img src={require('../../../images/dogy.jpg')} className="pet-preview-image" />
                        <p className="pet-name-preview">דניאל</p>
                        <div className="description-preview">
                            <img src={require('../../../images/heart.png')} className="pet-heart-preview" />
                            <p className="pet-desc-preview">כלב בינוני בן 5 שנים</p>
                        </div>
                        <p className="pet-goodWords-preview">אני אוהב לשחק</p>

                        <div className="description-preview">
                            <img src={require('../../../images/location.png')} className="pet-heart-preview" />
                            <p className="pet-desc-preview">מרכז</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search
