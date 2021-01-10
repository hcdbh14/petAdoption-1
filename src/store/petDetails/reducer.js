import { detailTypes } from './detailTypes';

const initialState = {
    petId: null,
    images: [],
    shelter: null,
    imagesLoading: false,
    shelterLoading: false,
    imagesError: "",
    shelterErrorr: ""
};

const detailReducer = (state = initialState, action) => {

    switch (action.type) {

        case detailTypes.DETAIL_SUCCESS:
            return { ...state, images: action.images, shelter: action.shelter, imagesLoading: action.imagesLoading, shelterLoading: action.shelterLoading, error: "" }

        case detailTypes.DETAIL_START:
            return { ...state, petId: action.petId, imagesLoading: action.imagesLoading, shelterLoading: action.shelterLoading, error: "" }

        case detailTypes.DETAIL_FAIL:
            return { ...state, imagesLoading: action.imagesLoading, shelterLoading: action.shelterLoading, imagesError: action.imagesError, shelterErrorr: action.shelterErrorr  }

        default:
            return state;
    }
}
export default detailReducer;