import React, { useState } from 'react'
import { breedMap } from '../../../util/breedMap'
import { getAge } from '../../../util/functions'

const SearchResultItem = (props) => {

    const [chosenImage, setchosenImage] = useState(0)

    const type = breedMap[props.pet.type];
    const ageText = getAge(props.pet.age);

    const vaccineCheckbox = props.pet.vaccinated === "1" ? <input type="checkbox" disabled checked /> : <input type="checkbox" disabled />
    const poopCheckbox = props.pet.poopTrained === "1" ? <input type="checkbox" disabled checked /> : <input type="checkbox" disabled />
    const regionText = props.pet.region === "0" ? "דרום" : props.pet.region === "1" ? "מרכז" : "צפון";

    const allImages = props.pet.images.map((img, i) => {
        return <img key={i} src={props.pet.images[i]} alt="weather condition" className="forecast__box__image" style={{ width: "10vw" }} onClick={() => setchosenImage(i)} />
    })
    return (
        <div>
            <img src={props.pet.images[chosenImage]} alt="weather condition" className="forecast__box__image" />
            {allImages}
            <div>
                <ul>
                    <li>
                        <a>{type}</a>
                    </li>
                    <li>
                        <a>{ageText}</a>
                    </li>
                    <li>
                        <a>{regionText}</a>
                    </li>
                    <li>
                        <a>{props.pet.number}</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>קצת עלי:</h3>
                {props.pet.goodWords}

                <h3>מתאים ל:</h3>
                {props.pet.suitables}

                <h3>אני מחוסן</h3>
                {vaccineCheckbox}


                <h3>אני מחונך לצרכים</h3>
                {poopCheckbox}
            </div>
        </div>
    )
}

export default SearchResultItem
