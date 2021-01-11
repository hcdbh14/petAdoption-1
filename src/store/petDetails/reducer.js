import { detailTypes } from './detailTypes';

const initialState = {
    pet: null,
    images: [],
    shelter: null,
    imagesLoading: false,
    shelterLoading: false,
    imagesError: "",
    shelterErrorr: ""
};

const detailReducer = (state = initialState, action) => {

    switch (action.type) {

        case detailTypes.DETAIL_IMAGES_SUCCESS:
            return { ...state, images: action.images, imagesLoading: action.imagesLoading, error: "" }

        case detailTypes.DETAIL_SHELTER_SUCCESS:
            return { ...state, shelter: action.shelter, shelterLoading: action.shelterLoading, error: "" }

        case detailTypes.DETAIL_START:
            return { ...state, pet: action.pet, imagesLoading: action.imagesLoading, shelterLoading: action.shelterLoading, error: "" }

        case detailTypes.DETAIL_FAIL:
            return { ...state, imagesLoading: action.imagesLoading, shelterLoading: action.shelterLoading, imagesError: action.imagesError, shelterErrorr: action.shelterErrorr }

        default:
            return state;
    }
}
export default detailReducer;