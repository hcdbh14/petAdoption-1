import React from 'react'
import CarouselItem from './CarouselItem';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = (props) => {
    const { carouselPets } = props;

    var settings = {
        autoplay: false,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,

        arrows: true,
        dots: false,
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
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const slide = carouselPets.map((pet, i) => {
        return < CarouselItem petPosition={pet} i={i} key={i} />
    })
    return (
        <div className="carousel">
            <Slider {...settings} style={{ direction: "ltr" }}>
                {slide}
            </Slider>
        </div>
    )
}

export default Carousel
