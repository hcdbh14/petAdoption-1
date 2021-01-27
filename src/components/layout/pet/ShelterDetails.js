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
            <br />
            <div className="ShelterDetails__contactInfo">

                <div className="ShelterDetails__contactWrapper">
                    <p className="ShelterDetails__contactTitle">טלפון</p>
                    <p className="ShelterDetails__contactInfo">{detailState.shelter.phoneNumber}</p>
                </div>


                <div className="ShelterDetails__contactWrapper">
                    <p className="ShelterDetails__contactTitle">אימייל</p>
                    <p className="ShelterDetails__contactInfo">{detailState.shelter.email}</p>
                </div>

                <div className="ShelterDetails__contactWrapper">
                    <p className="ShelterDetails__contactTitle">אתר העמותה</p>
                    <p className="ShelterDetails__contactInfo">{detailState.shelter.website}</p>
                </div>

                <div className="ShelterDetails__contactWrapper">
                    <p className="ShelterDetails__contactTitle">רשת חברתית</p>
                    <p className="ShelterDetails__contactInfo">{detailState.shelter.socialSite}</p>
                </div>

                <div className="ShelterDetails__contactWrapper">
                    <p className="ShelterDetails__contactTitle">כתובת</p>
                    <p className="ShelterDetails__contactInfo">{detailState.shelter.address}</p>
                </div>
            </div>
        </div >
    )
}

export default ShelterDetails
