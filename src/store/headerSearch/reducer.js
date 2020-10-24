import { searchTypes } from './searchTypes';

const initialState = {
    searchChoice: 0,
    searchToggle: false
};

const headerSearchReducer = (state = initialState, action) => {
    switch (action.type) {

        case searchTypes.TOGGLE_OPEN:
            return { ...state, searchChoice: state.searchChoice, searchToggle: true }

        case searchTypes.TOGGLE_CLOSE:
            return { ...state, searchChoice: state.searchChoice, searchToggle: false }

        case searchTypes.DOGS:
            return { ...state, searchChoice: 0, searchToggle: true }

        case searchTypes.CATS:
            return { ...state, searchChoice: 1, searchToggle: true }

        case searchTypes.OTHER_ANIMALS:
            return { ...state, searchChoice: 2, searchToggle: true }

        case searchTypes.SHELTERS:
            return { ...state, searchChoice: 3, searchToggle: true }

        default:
            return state;
    }
}

export default headerSearchReducer;