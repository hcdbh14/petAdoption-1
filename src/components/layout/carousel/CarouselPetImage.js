import React from 'react'
import FavIcon from '../ui/icons/FavIcon';
import FavIconEmpty from '../ui/icons/FavIconEmpty';
const CarouselPetImage = (props) => {

    const getNonZeroRandomNumberWithMathRound = () => {
        let random = Math.round(Math.random() * 10) - 5;
        if (random > 5)
            random = 5
        if (random < -5)
            random = -5

        return `${random}deg`;
    }
    const style = { transform: `rotate(${getNonZeroRandomNumberWithMathRound()})` }
    return (
        <div className="carousel__item__imageFrame" style={style}>
            {/* <img src="../../../images/frame.png" alt="image frame" className="carousel__item__imageFrame" /> */}
            <img src={props.image} alt="petImage" className="carousel__item__image" />
            <FavIcon />
            {/* <FavIconEmpty /> */}

        </div>
    )
}

export default CarouselPetImage
