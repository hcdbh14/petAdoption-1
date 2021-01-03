import axios from '../../config/axios';
import { spotLightTypes } from './spotLightTypes';

export const fetchSpotLightPets = () => {

    return (dispatch) => {
        dispatch(fetchSpotLightStart())

        axios.get("/notices/spotLight")
            .then(response => {
                dispatch(fetchSpotLightSuccess(response.data))
            })
            .catch(error => {
                const err = error.message
                console.log(err)
                dispatch(fetchSpotLightFail(err))
            })
    }
}

export const fetchSpotLightStart = () => {

    return { type: spotLightTypes.SEARCH_SPOTLIGHT_START };
}

export const fetchSpotLightFail = (err) => {
    return {
        type: spotLightTypes.SEARCH_SPOTLIGHT_FAIL,
        err
    };
}

export const fetchSpotLightSuccess = (pets) => {
    return {
        type: spotLightTypes.SEARCH_SPOTLIGHT_SUCCESS,
        pets
    };
}

