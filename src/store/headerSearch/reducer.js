import { searchTypes } from './searchTypes';

const initialState = {
    searchChoice: 0
};

const headerSearchReducer = (state = initialState, action) => {
    switch (action.type) {

        case searchTypes.DOGS:
            return { ...state, searchChoice: 0 }

        case searchTypes.CATS:
            return { ...state, searchChoice: 1 }

        case searchTypes.OTHER_ANIMALS:
            return { ...state, searchChoice: 2 }

        case searchTypes.SHELTERS:
            return { ...state, searchChoice: 3 }

        default:
            return state;
    }
}

export default headerSearchReducer;