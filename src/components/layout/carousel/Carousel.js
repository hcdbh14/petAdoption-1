import React, { useState } from 'react'
import CarouselItem from './CarouselItem';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = (props) => {
    const { carouselPets } = props;
    // const [petPosition, setpetPosition] = useState(
    //     carouselPets
    // )
    // const handleArrowClick = (side) => {
    //     let newPetPositions = petPosition.map(pet => {
    //         if (pet.position === petPosition.length - 1 && side === "RIGHT")
    //             pet.position = 0;
    //         else if (pet.position === 0 && side === "LEFT")
    //             pet.position = petPosition.length - 1;

    //         else if (side === "RIGHT")
    //             pet.position++

    //         else
    //             pet.position--
    //         return pet
    //     })
    //     newPetPositions = newPetPositions.sort((a, b) => a.position - b.position); // sort by asceding
    //     setpetPosition(newPetPositions)
    // }
    const getNonZeroRandomNumberWithMathRound = () => {
        let random = Math.round(Math.random() * 10) - 5;
        if (random > 5)
            random = 5
        if (random < -5)
            random = -5

        return `${random}deg`;
    }
    // const petCarouselItem = petPosition.filter(pet => { return pet.position < 5 }) // make array the size of 5
    // const petsShow = petCarouselItem.map((pet, i) => {
    //     let deg = getNonZeroRandomNumberWithMathRound()
    //     return < CarouselItem petPosition={pet} i={i} key={i} deg={deg} />
    // })
    const slide = carouselPets.map((pet, i) => {
        let deg = getNonZeroRandomNumberWithMathRound()
        return < CarouselItem petPosition={pet} i={i} key={i} deg={deg} />
    })

    var settings = {
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,

        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: true,
        centerModeL: true,
        swipeToSlide: true,
        // initialSlide: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="carousel">
            {/* <img src={require('../../../images/right-arrow.png')} className="carousel__arrow" onClick={() => { handleArrowClick("RIGHT") }} alt="right-arrow" />
            {petsShow}
            <img src={require('../../../images/left-arrow.png')} className="carousel__arrow" onClick={() => { handleArrowClick("RIGHT") }} alt="right-arrow" /> 

            
            <Slider {...settings}>
                {petPosition.map((pet, i) => {
                    let deg = getNonZeroRandomNumberWithMathRound()
                    return < CarouselItem petPosition={pet} i={i} key={i} deg={deg} />
                })}
            </Slider> */}
            <Slider {...settings}>
                {slide}
            </Slider>
        </div>
    )
}

export default Carousel
