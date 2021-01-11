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
            console.log(response.data)
            dispatch(imagesSuccess(response.data))
        })

        axios.get(shelterUrlPath,
            {
                params: {
                    shelterId: pet.shelter_id
                }
            }).then(response => {
                console.log(response.data)
                dispatch(shelterSuccess(response.data))
            })
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


export const shelterSuccess = (shelter) => {
    const shelterLoading = false 
    return { type: detailTypes.DETAIL_SHELTER_SUCCESS, 
        shelter, 
        shelterLoading 
    };

}

export const imagesSuccess = (images) => {
    const imagesLoading = false
    return { type: detailTypes.DETAIL_IMAGES_SUCCESS, 
        images, 
        imagesLoading 
    };
}

