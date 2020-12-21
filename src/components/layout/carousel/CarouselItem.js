import React from 'react'
import CarouselPetImage from './CarouselPetImage';
import CarouselPetInfo from './CarouselPetInfo';

const CarouselItem = (props) => {
    const { petPosition, i } = props;
    
    return (
        <div className={`carousel__item`}>
            <CarouselPetImage image={petPosition.pet.images} id={i} />
            <CarouselPetInfo pet={petPosition.pet} />
        </div>
    )
}

export default CarouselItem
