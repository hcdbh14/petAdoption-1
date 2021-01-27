import React from 'react';
import { useSelector } from 'react-redux';

const ShelterDetails = () => {

    const detailState = useSelector(state => state.detailReducer);

    return (
        <div className="ShelterDetails">
            <h2 className="ShelterDetails__title">פרטי העמותה המפרסמת</h2>
            <div className="ShelterDetails__wrapper">
                <img className="ShelterDetails__logo" src={`data:image/png;base64, ${detailState.shelter.logo}`} alt="לוגו של העמותה" />
                <p className="ShelterDetails__name">{detailState.shelter.name}</p>
           
                <p className="ShelterDetails__description">{detailState.shelter.description}</p>
            </div>
        </div >
    )
}

export default ShelterDetails
