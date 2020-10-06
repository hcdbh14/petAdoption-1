import React, { useState } from 'react'
import CarouselItem from './CarouselItem';

const Carousel = (props) => {
    const { carouselPets } = props;
    const [petPosition, setpetPosition] = useState(
        carouselPets
    )
    const handleArrowClick = (side) => {
        let newPetPositions = petPosition.map(pet => {
            if (pet.position === petPosition.length - 1 && side === "RIGHT")
                pet.position = 0;
            else if (pet.position === 0 && side === "LEFT")
                pet.position = petPosition.length - 1;

            else if (side === "RIGHT")
                pet.position++

            else
                pet.position--
            return pet
        })
        newPetPositions = newPetPositions.sort((a, b) => a.position - b.position); // sort by asceding
        setpetPosition(newPetPositions)
    }

    const petCarouselItem = petPosition.filter(pet => { return pet.position < 3 }) // make array the size of 3
    const petsShow = petCarouselItem.map((pet, i) => <CarouselItem petPosition={pet} i={i} key={i} />)

    return (
        <div className="carousel">
            <div onClick={() => { handleArrowClick("LEFT") }} className="carousel__arrow">
                <span >&rarr;</span>
            </div>
            {petsShow}
            <div onClick={() => { handleArrowClick("RIGHT") }} className="carousel__arrow">
                <span > &larr;</span>
            </div>
        </div>
    )
}

export default Carousel
