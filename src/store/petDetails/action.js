// import axios from '../../config/axios';
import { detailTypes } from './detailTypes';

export const getAdditionalDetails = (pet) => {

    return (dispatch) => {
        console.log(pet)
        dispatch(fetchPetDetailStart(pet))
    }
}

export const fetchPetDetailStart = (pet) => {
    const imagesLoading = true
    const shelterLoading = true 
    return { type: detailTypes.DETAIL_START, 
        pet, 
        imagesLoading, 
        shelterLoading 
    };
}

