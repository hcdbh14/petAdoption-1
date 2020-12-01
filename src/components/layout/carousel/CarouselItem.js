import React from 'react'
import CarouselPetImage from './CarouselPetImage';
import CarouselPetInfo from './CarouselPetInfo';
import FavIcon from '../ui/icons/FavIcon';
import FavIconEmpty from '../ui/icons/FavIconEmpty';
const CarouselItem = (props) => {
    const { petPosition, i } = props;
    return (
        <div className={`carousel__item`}>
            <CarouselPetImage image={petPosition.pet.images} id={i} />
            <FavIcon />
            {/* <FavIconEmpty /> */}
            <CarouselPetInfo pet={petPosition.pet} />
        </div>
    )
}

export default CarouselItem
