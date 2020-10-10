import React from 'react'
import CarouselPetImage from './CarouselPetImage';
import CarouselPetInfo from './CarouselPetInfo';

const CarouselItem = (props) => {
    const { petPosition, i } = props;
    const edge = i % 2 === 0 ? "edge" : "middle"
    return (
        <div className={`carousel__item ${edge}`}>
            <CarouselPetImage image={petPosition.pet.images} id={i} />
            <CarouselPetInfo pet={petPosition.pet} />
        </div>
    )
}

export default CarouselItem
