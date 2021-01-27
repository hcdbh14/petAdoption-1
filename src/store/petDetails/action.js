import axios from '../../config/axios';
import { detailTypes } from './detailTypes';

export const getAdditionalDetails = (pet, id) => {

    const petUrlPath = "/notices/details"
    const shelterUrlPath = "/shelters/details"
    const imagesUrlPath = "/notices/pet/images"

    return (dispatch) => {
        if (pet === null) {
            axios.get(petUrlPath,
                {
                    params: {
                        noticeId: id
                    }
                }).then(response => {
                    dispatch(fetchPetDetailStart(response.data))
                        axios.get(imagesUrlPath,
                            {
                                params: {
                                    noticeId: response.data.id
                                }
                            }).then(response => {
                                dispatch(imagesSuccess(response.data))
                            })
                            .catch(error => {
                                const err = error.message
                                console.log(err)
                                dispatch(imagesFail(err))
                            })

                        axios.get(shelterUrlPath,
                            {
                                params: {
                                    shelterId: response.data.shelter_id
                                }
                            }).then(response => {
                                dispatch(shelterSuccess(response.data))
                            })
                            .catch(error => {
                                const err = error.message
                                console.log(err)
                                dispatch(shelterFail(err))
                            })
                })
                .catch(error => {
                    const err = error.message
                    console.log(err)
                    dispatch(imagesFail(err))
                })

        } else {
            dispatch(fetchPetDetailStart(pet))
            axios.get(imagesUrlPath,
                {
                    params: {
                        noticeId: pet.id
                    }
                }).then(response => {
                    dispatch(imagesSuccess(response.data))
                })
                .catch(error => {
                    const err = error.message
                    console.log(err)
                    dispatch(imagesFail(err))
                })

            axios.get(shelterUrlPath,
                {
                    params: {
                        shelterId: pet.shelter_id
                    }
                }).then(response => {
                    dispatch(shelterSuccess(response.data))
                })
                .catch(error => {
                    const err = error.message
                    console.log(err)
                    dispatch(shelterFail(err))
                })
        }
    }
}

export const fetchPetDetailStart = (pet) => {
    return {
        type: detailTypes.DETAIL_START,
        pet
    };
}

export const imagesSuccess = (images) => {
    return {
        type: detailTypes.DETAIL_IMAGES_SUCCESS,
        images
    };
}

export const shelterSuccess = (shelter) => {
    return {
        type: detailTypes.DETAIL_SHELTER_SUCCESS,
        shelter
    };
}


export const imagesFail = (err) => {
    return {
        type: detailTypes.DETAIL_IMAGES_FAIL,
        err
    };
}

export const shelterFail = (err) => {
    return {
        type: detailTypes.DETAIL_SHELTER_FAIL,
        err
    };
}

