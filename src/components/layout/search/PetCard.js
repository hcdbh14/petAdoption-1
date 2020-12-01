import React from 'react'

const PetCard = (props) => {
    return (
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
    )
}

export default PetCard
