import axios from '../../config/axios';
import { petsTypes } from './petsTypes';

export const fetchPets = (pageNumber, pageSize, currentPage, petType, region, gender, ageGroup, needCount, name) => {
    var count = 0
    var urlPath = "/notices"
    var countUrlPath = "/notices/count"
    return (dispatch) => {
        dispatch(fetchPetsStart(currentPage))
        if (petType !== "" || region !== "" || gender !== "" || ageGroup !== "" || name !== "") {
            urlPath += "/filter"
            countUrlPath += "/filter"
        }
        if (needCount) {
            axios.get(countUrlPath,
                {
                    params: {
                        petType: petType,
                        region: region,
                        gender: gender,
                        ageGroup: ageGroup,
                        name: name
                    }
                }).then(response => {
                    count = response.data.count
                })
        }
        axios.get(urlPath,
            {
                params: {
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                    petType: petType,
                    region: region,
                    gender: gender,
                    ageGroup: ageGroup,
                    name: name
                }
            })

            .then(response => {
                const pets = response.data
                if (needCount) {
                    const pageNum = Math.trunc((count + 12 - 1) / 12)
                    dispatch(fetchPetsAndCountSuccess(pets, count, pageNum))
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

export const fetchPetsStart = (currentPage) => {

    return { type: petsTypes.SEARCH_PETS_START,
        currentPage
     };
}

export const fetchPetsFail = (err) => {
    return {
        type: petsTypes.SEARCH_PETS_FAIL,
        err
    };
}

export const fetchPetsAndCountSuccess = (pets, count, pageNum) => {
    return {
        type: petsTypes.SEARCH_PETS_AND_COUNT_SUCCESS,
        pets,
        count,
        pageNum
    };
}

export const fetchPetsSuccess = (pets) => {
    return {
        type: petsTypes.SEARCH_PETS_SUCCESS,
        pets,
    };
}

export const updateFilter = () => {
    return {
        type: petsTypes.SEARCH_PETS_UPDATE_FILTER
    };
}

