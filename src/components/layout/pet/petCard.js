import React from 'react';

const PetCard = () => {
    return (
        <div className="petCard">
            <img className="petCard__image" alt="תמונת החיה"/>
            <h4 className="petCard__name">שם</h4>
            <p className="petCard__goodWords">מילים טובות</p>
            <p className="petCard__region">מרכז</p>
            <p className="petCard__age"> בת 1 שנים</p>
            <button className="petCard__detailsButton">פרטים נוספים</button>
        </div >
    )
}

export default PetCard
