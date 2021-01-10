// import axios from '../../config/axios';
import { detailTypes } from './detailTypes';

export const getAdditionalDetails = (petId) => {

    return (dispatch) => {
        dispatch(fetchPetDetailStart(petId))
    }
}

export const fetchPetDetailStart = (petId) => {
    const imagesLoading = true
    const shelterLoading = true 
    return { type: detailTypes.DETAIL_START, 
        petId, 
        imagesLoading, 
        shelterLoading 
    };
}

