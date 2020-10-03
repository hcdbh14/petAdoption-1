import React from 'react'

const CarouselPetImage = (props) => {

    const getNonZeroRandomNumberWithMathRound = () => {
        var random = Math.round(Math.random() * 30) - 15;
        if (random > 30)
            random = 30
        if (random < -30)
            random = -30
        console.log(random)

        return `${random}deg`;
    }
    const style = { transform: `rotate(${getNonZeroRandomNumberWithMathRound()})` }
    return (
        <div className="carousel__item__imageFrame" style={style}>
            <img src={props.image} alt="petImage" className="carousel__item__image" />
        </div>
    )
}

export default CarouselPetImage
