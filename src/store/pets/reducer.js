import { petsTypes } from './petsTypes';
import { petData } from '../../mockdata/pet'
const initialState = {
    searchResults: [],
    searchInputs: {
        age: '',
        region: '',
        gender: '',
        type: '',
        vaccinated: '',
        poopTrained: '',
        size: '',
        race: '',
    },
    currentPetID: 0,
    currentPet: petData,

    loading: false,
    error: ""
};

const petReducer = (state = initialState, action) => {
    switch (action.type) {
        case petsTypes.SET_SEARCH_INPUTS:
            return { ...state, searchInputs: action.searchInputs }

        case petsTypes.CLEAR_SEARCH_RESULTS:
            return { ...state, searchResults: [] }


        case petsTypes.SEARCH_PETS_START:
            return { ...state, loading: true, error: '' }

        case petsTypes.SEARCH_PETS_FAIL:
            return { ...state, loading: false, error: action.err }

        case petsTypes.SEARCH_PETS_SUCCESS:
            return { ...state, loading: false, searchResults: action.pets }

        case petsTypes.SEARCH_PET_SUCCESS:
            return { ...state, loading: false, currentPet: action.pet }
        default:
            return state;
    }

}
export default petReducer;