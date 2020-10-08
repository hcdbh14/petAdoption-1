import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavIcon from '../ui/icons/FavIcon';
import FavIconEmpty from '../ui/icons/FavIconEmpty';
const CarouselPetImage = (props) => {

    const getNonZeroRandomNumberWithMathRound = () => {
        var random = Math.round(Math.random() * 15) - 7;
        if (random > 7)
            random = 7
        if (random < -7)
            random = -7

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
