import React from 'react'
import Carousel from '../carousel/Carousel';
import { carouselPets } from '../../../mockdata/carouselPets'

const PetsToAdoptSection = () => {
    return (
        <div className="pets-section">
            <h2 className="pets-section__title"> החיות שלנו</h2>
            <Carousel carouselPets={carouselPets} />
        </div>
    )
}

export default PetsToAdoptSection
