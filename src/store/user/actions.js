import { userTypes } from './userTypes'
import axios from 'axios';

import db from '../../config/firebase'
import { buildQuery } from '../../util/functions';

let queryPet = db.collection('Cards_Data')

export const setInput = (input) => {
    return {
        type: userTypes.SET_INPUT,
        input
    };
};


export const postPet = (petToPost, userID) => {

    return async (dispatch) => {
        try {
            dispatch(postPetsStart());
            queryPet = queryPet.doc(userID).set(petToPost).then(function () {
                console.log("Document successfully written!");
                dispatch(postPetsSuccess());
            })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
        } catch (err) {
            dispatch(postPetsFail(err))
            console.log(err.message);
        }
    }
};

export const postPetsStart = () => {
    return {
        type: userTypes.POST_PET_START,
    }
}

export const postPetsSuccess = () => {
    return {
        type: userTypes.POST_PET_SUCCESS,
    }
}

export const postPetsFail = (err) => {
    return {
        type: userTypes.POST_PET_FAIL,
        err
    }
}
export const fetchUsers = () => {

    return {
        type: userTypes.SET_INPUT,

    };
}