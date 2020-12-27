import axios from '../../config/axios';
import { petsTypes } from './petsTypes';



export const fetchPets = (pageNumber, pageSize, petType, region, gender, ageGroup, needCount) => {
    var count = 0
    var urlPath = "/notices"
    var countUrlPath = "/notices/count"
    return (dispatch) => {
        dispatch(fetchPetsStart)
        if(petType !== "" || region !== "" || gender !== "" || ageGroup !== "") {
            urlPath += "/filter"
            countUrlPath += "/filter"
        }
        if (needCount) {
            axios.get(countUrlPath, 
                { params: { 
                    petType: petType,
                    region: region,
                    gender: gender,
                    ageGroup: ageGroup
                } }).then(response => {
                     count = response.data.count
                })
        }
        axios.get(urlPath, 
        { params: { 
            pageNumber: pageNumber,
            pageSize: pageSize,
            petType: petType,
            region: region,
            gender: gender,
            ageGroup: ageGroup
        } })

            .then(response => {
                const pets = response.data
                if (needCount) {
                    dispatch(fetchPetsAndCountSuccess(pets, count))
                } else {
                    dispatch(fetchPetsSuccess(pets))
                }
            })
            .catch(error => {
                const err = error.message
                console.log(err)
                dispatch(fetchPetsFail(err))
            })
    }
}

export const setSearchInputs = (searchInputs) => {
    return {
        type: petsTypes.SET_SEARCH_INPUTS,
        searchInputs
    };
}

export const fetchPetsStart = () => {
    return { type: petsTypes.SEARCH_PETS_START };
}

export const fetchPetsFail = (err) => {
    return {
        type: petsTypes.SEARCH_PETS_FAIL,
        err
    };
}

export const fetchPetsAndCountSuccess = (pets, count) => {
    return {
        type: petsTypes.SEARCH_PETS_AND_COUNT_SUCCESS,
        count,
        pets
    };
}

export const fetchPetsSuccess = (pets) => {
    return {
        type: petsTypes.SEARCH_PETS_SUCCESS,
        pets
    };
}

