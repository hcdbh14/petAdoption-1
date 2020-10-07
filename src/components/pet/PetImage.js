import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const PetImage = () => {
    const petsState = useSelector(state => state.petsReducer);

    const allImages = petsState.currentPet.images.map((img, i) => {
        return <img key={i} src={petsState.currentPet.images[i]} alt="weather condition" className="forecast__box__image" style={{ width: "10vw" }} onClick={() => setchosenImage(i)} />
    })

    const [chosenImage, setchosenImage] = useState(0)

    return (
        <>
            <img src={petsState.currentPet.images[chosenImage]} alt="weather condition" className="forecast__box__image" />
            {allImages}
        </>
    )
}

export default PetImage
