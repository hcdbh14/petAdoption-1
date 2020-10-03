import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CarouselPetImage from './CarouselPetImage';

const CarouselItem = (props) => {
    const petsState = useSelector(state => state.petsReducer);

    const { petPosition, i } = props;
    return (
        <div className="carousel__item">
            <CarouselPetImage image={petPosition.pet.images} />
        </div>
    )
}

export default CarouselItem
