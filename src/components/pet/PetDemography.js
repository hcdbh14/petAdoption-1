import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { breedMap } from '../../util/breedMap'
import { getAge } from '../../util/functions'
const PetDemography = () => {

    const petsState = useSelector(state => state.petsReducer);
    const dispatch = useDispatch();

    const type = breedMap[petsState.currentPet.type];
    const ageText = getAge(petsState.currentPet.age)
    return (
        <div>
            <ul>
                <li>
                    <a>{type}</a>
                </li>
                <li>
                    <a>{ageText}</a>
                </li>
                <li>
                    <a>{petsState.currentPet.region}</a>
                </li>
                <li>
                    <a>{petsState.currentPet.number}</a>
                </li>
            </ul>
        </div>
    )
}

export default PetDemography
