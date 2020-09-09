import { userTypes } from './userTypes';

const initialState = {
    userId: '5RM3F4kdVHQsK5yn3haoeNCBW0o1',
    petToPost: {
        size: 1,
        name: "צ׳אי",
        type: 0,
        goodWords: "כלבה מתוקה ועדינה ",
        number: "0503026730",
        suitables: "ילדים, דירה, מבוגרים, בית עם חצר",
        poopTrained: 0,
        gender: 0,
        images: [
            "https://firebasestorage.googleapis.com/v0/b/petadoption-a2cd3.appspot.com/o/5RM3F4kdVHQsK5yn3haoeNCBW0o1%2F0?alt=media&token=f70036f4-0259-4fb2-95eb-c5de48d3c0bc",
            "https://firebasestorage.googleapis.com/v0/b/petadoption-a2cd3.appspot.com/o/5RM3F4kdVHQsK5yn3haoeNCBW0o1%2F1?alt=media&token=be3d2771-b26b-4144-ac2e-5c24074f401f",
            "https://firebasestorage.googleapis.com/v0/b/petadoption-a2cd3.appspot.com/o/5RM3F4kdVHQsK5yn3haoeNCBW0o1%2F2?alt=media&token=321476a3-3989-40eb-854f-e5009e40d7e7",
        ],
        vaccinated: 0,
        age: 1,
        region: "באר שבע",
        desc: "כלבה מתוקה שאוהבת לרוץ ולשחק",
        race: "לא ידוע"
    },

    loading: false
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {

        case userTypes.SET_INPUT:
            return { ...state, userSearchInput: action.input }

        case userTypes.FETCH_USERS:
            return { ...state, test: action.data }

        case userTypes.POST_PET_START:
            return { ...state, loading: true }

        case userTypes.POST_PET_SUCCESS:
            return { ...state, loading: false }

        case userTypes.POST_PET_FAIL:
            return { ...state, loading: false }

        default:
            return state;
    }

}
export default weatherReducer;