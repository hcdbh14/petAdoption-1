import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CarouselPetImage from './CarouselPetImage';
import CarouselPetInfo from './CarouselPetInfo';

const CarouselItem = (props) => {
    const petsState = useSelector(state => state.petsReducer);

    const { petPosition, i } = props;
    return (
        <div className="carousel__item">
            <CarouselPetImage image={petPosition.pet.images} />
            <CarouselPetInfo pet={petPosition.pet} />
        </div>
    )
}

export default CarouselItem
