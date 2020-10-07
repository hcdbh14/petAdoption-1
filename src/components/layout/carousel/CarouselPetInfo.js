import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const CarouselPetInfo = (props) => {
    const { pet } = props;

    const region = pet.region === '0' ? 'דרום' : pet.region === '1' ? "מרכז" : "צפון"

    // const favIcon = (
    //     isFav ? < FavIcon clicked={handleClick} /> : <FavIconEmpty clicked={handleClick} />
    // )
    return (
        <div className="carousel__item__info">
            <h2 className="white">{pet.name}  {pet.age} שנים</h2>
            <FavoriteBorderIcon />
            <FavoriteIcon />

            <p className="carousel__item__paragraph">{pet.goodWords}</p>
            <p className="carousel__item__paragraph"> {region}</p>
        </div>
    )
}

export default CarouselPetInfo
