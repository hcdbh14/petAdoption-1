import { spotLightTypes } from './spotLightTypes';

const initialState = {
    searchResults: [],
    loading: false,
    error: ""
};

const petReducer = (state = initialState, action) => {
    switch (action.type) {

        case spotLightTypes.SEARCH_SPOTLIGHT_START:
            return { ...state, loading: true, error: '' }

        case spotLightTypes.SEARCH_SPOTLIGHT_FAIL:
            return { ...state, loading: false, error: action.err }

        case spotLightTypes.SEARCH_SPOTLIGHT_SUCCESS:
            return { ...state, loading: false, searchResults: action.pets }

        default:
            return state;
    }
}
export default petReducer;