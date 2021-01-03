import React from 'react'
import Carousel from '../carousel/Carousel';
import { carouselPets } from '../../../mockdata/carouselPets'
import { Link } from 'react-router-dom';
const PetsToAdoptSection = () => {

    return (
        <div className="pets-section">
            <div className="pets-section-title">
                <h2 className="pets-section-text-title"> החיות שלנו</h2>
                <img src={require('../../../images/small-paw.png')} alt="paw" className="small-paw" />
            </div>
            <Carousel carouselPets={carouselPets} />
            <div className="pets-section_more-pets">
                <Link to='/#' >חיות נוספות</Link>
            </div>
        </div>
    )
}

export default PetsToAdoptSection
