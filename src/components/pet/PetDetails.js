import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const PetDetails = () => {
    const petsState = useSelector(state => state.petsReducer);
    const dispatch = useDispatch();

    const vaccineCheckbox = (
        petsState.currentPet.vaccinated ? <input type="checkbox" disabled checked /> : <input type="checkbox" disabled />
    )
    const poopCheckbox = (
        petsState.currentPet.poopTrained ? <input type="checkbox" disabled checked /> : <input type="checkbox" disabled />
    )
    return (
        <div>
            <h3>קצת עלי:</h3>
            {petsState.currentPet.goodWords}

            <h3>מתאים ל:</h3>
            {petsState.currentPet.suitables}

            <h3>אני מחוסן</h3>
            {vaccineCheckbox}


            <h3>אני מחונך לצרכים</h3>
            {poopCheckbox}
        </div>
    )
}

export default PetDetails
