import { filterTypes } from './filterTypes';

const initialState = {
    name: "",
    race: "",
    area: "",
    gender: "",
    ageGroup: "",
    filters: [
        { type: "byName", on: false },
        { type: "byRace", on: false },
        { type: "byArea", on: false },
        { type: "byGender", on: false },
        { type: "byAge", on: false }
    ]
};


const filterReducer = (state = initialState, action) => {

    switch (action.type) {
 
        case filterTypes.BY_NAME:
            state.filters[0].on = !state.filters[0].on;
            return { ...state, name: action.input}

        case filterTypes.BY_RACE:
            state.filters[1].on = !state.filters[1].on;
            return { ...state, race: action.input }

        case filterTypes.BY_AREA:
            state.filters[2].on = !state.filters[2].on;
            return { ...state, area: action.input }

        case filterTypes.BY_GENDER:
            state.filters[3].on = !state.filters[3].on;
            return { ...state, gender: action.input }
        
        case filterTypes.BY_AGE:
            state.filters[4].on = !state.filters[4].on;
            return { ...state, ageGroup: action.input }

        default:
            return state;
    }
}

export default filterReducer;