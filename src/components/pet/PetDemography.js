import React from 'react'
import { useSelector } from 'react-redux';
import { breedMap } from '../../util/petMap'
import { getAge } from '../../util/functions'
const PetDemography = () => {

    const petsState = useSelector(state => state.petsReducer);

    const type = breedMap[petsState.currentPet.type];
    const ageText = getAge(petsState.currentPet.age)
    return (
        <div>
            <ul>
                <li>
                    {type}
                </li>
                <li>
                    {ageText}
                </li>
                <li>
                    {petsState.currentPet.region}
                </li>
                <li>
                    {petsState.currentPet.number}
                </li>
            </ul>
        </div>
    )
}

export default PetDemography
