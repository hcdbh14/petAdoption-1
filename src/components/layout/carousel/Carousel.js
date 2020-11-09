import React, { useState } from 'react'
import CarouselItem from './CarouselItem';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = (props) => {
    const { carouselPets } = props;

    const getNonZeroRandomNumberWithMathRound = () => {
        let random = Math.round(Math.random() * 10) - 5;
        if (random > 5)
            random = 5
        if (random < -5)
            random = -5
        return `${random}deg`;
    }

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
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: false,
        swipeToSlide: true,
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
            <Slider {...settings} style={{ direction: "ltr" }}>
                {slide}
            </Slider>
        </div>
    )
}

export default Carousel
