import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

const PetImage = () => {
    const petsState = useSelector(state => state.petsReducer);
    const dispatch = useDispatch();

    const allImages = petsState.currentPet.images.map((img, i) => {
        return <img key={i} src={petsState.currentPet.images[i]} alt="weather condition" className="forecast__box__image" style={{ width: "10vw" }} onClick={() => setchosenImage(i)} />
    })

    const [chosenImage, setchosenImage] = useState(0)
    const handleClick = (i) => {
        setchosenImage(i)
    }
    return (
        <>
            <img src={petsState.currentPet.images[chosenImage]} alt="weather condition" className="forecast__box__image" />
            {allImages}
        </>
    )
}

export default PetImage
