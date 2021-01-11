import React from 'react';
import { useSelector } from 'react-redux';

const PetDetails = () => {

    // const dispatch = useDispatch();
    const detailState = useSelector(state => state.detailReducer);

    return (
        <div style={{ margin: "500x" }}>

            <h1 style={{ color: "black" }}>{detailState.pet.id}</h1>
            <h1 style={{ color: "black" }}>{detailState.pet.name}</h1>
            <h1 style={{ color: "black" }}>{detailState.pet.age}</h1>
            <h1 style={{ color: "black" }}>{detailState.pet.description}</h1>
            <h1 style={{ color: "black" }}>{detailState.pet.gender}</h1>
            <h1 style={{ color: "black" }}>{detailState.pet.goodWords}</h1>
            <h1 style={{ color: "black" }}>{detailState.pet.phoneNumber}</h1>
            <h1 style={{ color: "black" }}>{detailState.pet.poopTrained}</h1>
            <h1 style={{ color: "black" }}>{detailState.pet.race}</h1>
            <h1 style={{ color: "black" }}>{detailState.pet.region}</h1>
            <h1 style={{ color: "black" }}>{detailState.pet.size}</h1>
            <h1 style={{ color: "black" }}>{detailState.pet.suitables}</h1>
            <h1 style={{ color: "black" }}>{detailState.pet.postDate}</h1>
            <h1 style={{ color: "black" }}>{detailState.pet.petType}</h1>
            <h1 style={{ color: "black" }}>{detailState.pet.shelter_id}</h1>
            <h1 style={{ color: "black" }}>{detailState.pet.vaccinated}</h1>
            <h1 style={{ color: "black" }}>{detailState.pet.ageGroup}</h1>
            <img className="petCard__image" src={`data:image/png;base64, ${detailState.pet.image}`} alt="תמונת החיה" />
            {detailState.imagesError !== "" ?
                <h1>error</h1>
                : (detailState.imagesLoading ?
                    <h1>images loading</h1>
                    :
                    <h1>images ready!</h1>
                )}

            {detailState.shelterError !== "" ?
                <h1>error</h1>
                : (detailState.shelterLoading ?
                    <h1>shelter loading</h1>
                    :
                    <h1>shelter ready!</h1>
                )}
        </div >
    )
}

export default PetDetails
