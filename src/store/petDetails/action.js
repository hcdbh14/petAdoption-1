import axios from '../../config/axios';
import { detailTypes } from './detailTypes';

export const getAdditionalDetails = (pet) => {
    const urlPath = "/notices/pet/images"
    const shelterUrlPath = "/shelters/details"
    return (dispatch) => {
        dispatch(fetchPetDetailStart(pet))
        axios.get(urlPath,
            {
                params: {
                    noticeId: pet.id
                }
            }).then(response => {
                dispatch(imagesSuccess(response.data))
            })
            .catch(error => {
                const err = error.message
                console.log(err)
                dispatch(imagesFail(err))
            })

        axios.get(shelterUrlPath,
            {
                params: {
                    shelterId: pet.shelter_id
                }
            }).then(response => {
                dispatch(shelterSuccess(response.data))
            })
            .catch(error => {
                const err = error.message
                console.log(err)
                dispatch(shelterFail(err))
            })
    }
}

export const fetchPetDetailStart = (pet) => {
    return {
        type: detailTypes.DETAIL_START,
        pet
    };
}

export const imagesSuccess = (images) => {
    return {
        type: detailTypes.DETAIL_IMAGES_SUCCESS,
        images
    };
}

export const shelterSuccess = (shelter) => {
    return {
        type: detailTypes.DETAIL_SHELTER_SUCCESS,
        shelter
    };
}


export const imagesFail = (err) => {
    return {
        type: detailTypes.DETAIL_IMAGES_FAIL,
        err
    };
}

export const shelterFail = (err) => {
    return {
        type: detailTypes.DETAIL_SHELTER_FAIL,
        err
    };
}

