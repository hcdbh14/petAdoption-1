import React, { useState, useEffect } from 'react'
import CarouselItem from './CarouselItem';

const Carousel = () => {
    const [petPosition, setpetPosition] = useState(
        [
            {
                pet: {
                    size: 0,
                    name: "צמר",
                    type: 0,
                    goodWords: "גור חמוד למסירה",
                    number: "0503026730",
                    suitables: "ילדים, דירה, מבוגרים, בית עם חצר",
                    poopTrained: 0,
                    gender: 0,
                    images: [
                        "https://firebasestorage.googleapis.com/v0/b/petadoption-a2cd3.appspot.com/o/5RM3F4kdVHQsK5yn3haoeNCBW0o1%2F0?alt=media&token=f70036f4-0259-4fb2-95eb-c5de48d3c0bc",
                        "https://firebasestorage.googleapis.com/v0/b/petadoption-a2cd3.appspot.com/o/5RM3F4kdVHQsK5yn3haoeNCBW0o1%2F1?alt=media&token=be3d2771-b26b-4144-ac2e-5c24074f401f",
                        "https://firebasestorage.googleapis.com/v0/b/petadoption-a2cd3.appspot.com/o/5RM3F4kdVHQsK5yn3haoeNCBW0o1%2F2?alt=media&token=321476a3-3989-40eb-854f-e5009e40d7e7",
                    ],
                    vaccinated: 0,
                    age: 0.1,
                    region: "נתניה",
                    desc: "כלב רועים מעורב למסירה פרטים בפרטי",
                    race: "כלב רועים מעורב"
                }, position: 0
            },
            {
                pet: {
                    size: 0,
                    name: "צמר",
                    type: 0,
                    goodWords: "גור חמוד למסירה",
                    number: "0503026730",
                    suitables: "ילדים, דירה, מבוגרים, בית עם חצר",
                    poopTrained: 0,
                    gender: 0,
                    images: [
                        "https://firebasestorage.googleapis.com/v0/b/petadoption-a2cd3.appspot.com/o/5RM3F4kdVHQsK5yn3haoeNCBW0o1%2F1?alt=media&token=be3d2771-b26b-4144-ac2e-5c24074f401f",
                        "https://firebasestorage.googleapis.com/v0/b/petadoption-a2cd3.appspot.com/o/5RM3F4kdVHQsK5yn3haoeNCBW0o1%2F2?alt=media&token=321476a3-3989-40eb-854f-e5009e40d7e7",
                    ],
                    vaccinated: 0,
                    age: 0.1,
                    region: "נתניה",
                    desc: "כלב רועים מעורב למסירה פרטים בפרטי",
                    race: "כלב רועים מעורב"
                }, position: 1
            },
            {
                pet: {
                    size: 0,
                    name: "צמר",
                    type: 0,
                    goodWords: "גור חמוד למסירה",
                    number: "0503026730",
                    suitables: "ילדים, דירה, מבוגרים, בית עם חצר",
                    poopTrained: 0,
                    gender: 0,
                    images: [
                        "https://firebasestorage.googleapis.com/v0/b/petadoption-a2cd3.appspot.com/o/5RM3F4kdVHQsK5yn3haoeNCBW0o1%2F2?alt=media&token=321476a3-3989-40eb-854f-e5009e40d7e7",
                    ],
                    vaccinated: 0,
                    age: 0.1,
                    region: "נתניה",
                    desc: "כלב רועים מעורב למסירה פרטים בפרטי",
                    race: "כלב רועים מעורב"
                }, position: 2
            },
            { pet: {}, position: 3 },
            { pet: {}, position: 4 }
        ]
    )

    const handleArrowClick = (side) => {
        const newPetPositions = petPosition.map(pet => {
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
        setpetPosition(
            newPetPositions
        )
    }

    const petCarouselItem = petPosition.filter(pet => { return pet.position < 3 }) // make array the size of 3
    const petsShow = petCarouselItem.map((pet, i) => <CarouselItem petPosition={pet} i={i} key={i} />)
    return (
        <div className="carousel">
            <div onClick={() => { handleArrowClick("LEFT") }}>
                <span>&larr;</span>
            </div>
            {petsShow}
            <div onClick={() => { handleArrowClick("RIGHT") }}>
                <span>&rArr;</span>
            </div>
        </div>
    )
}

export default Carousel
