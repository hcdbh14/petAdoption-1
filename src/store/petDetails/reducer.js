import { detailTypes } from './detailTypes';

const initialState = {
    pet: null,
    images: [],
    shelter: null,
    imagesLoading: false,
    shelterLoading: false,
    imagesError: "",
    shelterError: ""
};

const detailReducer = (state = initialState, action) => {

    switch (action.type) {

        case detailTypes.DETAIL_IMAGES_SUCCESS:
            return { ...state, images: action.images, imagesLoading: false }

        case detailTypes.DETAIL_SHELTER_SUCCESS:
            return { ...state, shelter: action.shelter, shelterLoading: false }

        case detailTypes.DETAIL_START:
            return { ...state, pet: action.pet, imagesLoading: true, shelterLoading: true, imagesError: "", shelterError: "", images: [], shelter: null }

        case detailTypes.DETAIL_IMAGES_FAIL:
            return { ...state, imagesError: action.imagesError, imagesLoading: false }

        case detailTypes.DETAIL_SHELTER_FAIL:
            return { ...state, shelterError: action.shelterError, shelterLoading: false}

        default:
            return state;
    }
}
export default detailReducer;