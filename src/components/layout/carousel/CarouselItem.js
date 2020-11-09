import React from 'react'
import CarouselPetImage from './CarouselPetImage';
import CarouselPetInfo from './CarouselPetInfo';

const CarouselItem = (props) => {
    const { petPosition, i, deg } = props;
    // const edge = i === 2 ? "middle" : "edge"
    // const hidden = i === 0 || i === 4 ? "hidden" : "";
    return (
        <div className={`carousel__item`}>
            <CarouselPetImage image={petPosition.pet.images} id={i} deg={deg} />
            <CarouselPetInfo pet={petPosition.pet} />
        </div>
    )
}

export default CarouselItem
