import React from 'react'
import SearchTitle from './SearchTitle';
import Collapsible from './Collapsible';

const Search = () => {
    return (
        <div className="search">
            <SearchTitle />
            <div className="search__options">
                <Collapsible />

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
