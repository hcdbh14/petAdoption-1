import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdditionalDetails } from '../../../store/petDetails/action';

const PetDetails = (petDetails) => {

    const dispatch = useDispatch();
    const detailState = useSelector(state => state.detailReducer);


    const loadExtraDetails = () => {
            console.log(detailState)
            console.log(petDetails)
            dispatch(getAdditionalDetails(petDetails.id))
    }

    useEffect(loadExtraDetails(), [])

    return (
        <div>
            
        </div >
    )
}

export default PetDetails
