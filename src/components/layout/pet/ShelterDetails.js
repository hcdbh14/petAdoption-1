import React from 'react';
import { useSelector } from 'react-redux';

const ShelterDetails = () => {

    const detailState = useSelector(state => state.detailReducer);

    return (
        <div className="ShelterDetails">
            <h2>{detailState.pet.name}</h2>
        </div >
    )
}

export default ShelterDetails
