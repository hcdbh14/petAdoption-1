import { petsTypes } from './petsTypes'
import { firebaseApp } from '../../config/firebase';
import { buildQuery } from '../../util/functions';

const firestore = firebaseApp.firestore()
export const clearSearchResults = () => {
    return {
        type: petsTypes.CLEAR_SEARCH_RESULTS,
    };
}

export const fetchPets = (search) => {
    return async (dispatch) => {
        try {
            dispatch(fetchPetsStart());
            let query = firestore.collection('Cards_Data')
            query = buildQuery(query, search)

            query.get()
                .then(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => doc.data());
                    dispatch(fetchPetsSuccess(data));
                });

        } catch (err) {
            dispatch(fetchPetsFail(err))
        }
    }
}

export const setSearchInputs = (searchInputs) => {
    return {
        type: petsTypes.SET_SEARCH_INPUTS,
        searchInputs
    };
}

export const fetchPet = (id) => {
    return async (dispatch) => {
        dispatch(fetchPetsStart())
        try {
            firestore.collection('Cards_Data')
                .doc(id).get().then(function (doc) {
                    if (doc.exists) {
                        const pet = doc.data()
                        dispatch(fetchPetSuccess(pet))
                    } else {
                        console.log("No such document!");
                    }
                })
        } catch (err) {
            dispatch(fetchPetsFail(err))
            console.log(err.message);
        }
    }
}

export const fetchPetsStart = () => {
    return { type: petsTypes.SEARCH_PETS_START };
}

export const fetchPetsFail = (err) => {
    return {
        type: petsTypes.SEARCH_PETS_FAIL,
        err
    };
}

export const fetchPetsSuccess = (pets) => {
    return {
        type: petsTypes.SEARCH_PETS_SUCCESS,
        pets
    };
}

export const fetchPetSuccess = (pet) => {
    return {
        type: petsTypes.SEARCH_PET_SUCCESS,
        pet
    };
}
