import firebase from 'firebase'
import { auth, firebaseApp } from '../config/firebase';
import { signInAnonymously } from '../store/auth/action';

const firestore = firebaseApp.firestore();
const increment = firebase.firestore.FieldValue.increment(1);
const decrement = firebase.firestore.FieldValue.increment(-1);

export const getLikedPets = () => {

    let likedPets = localStorage.getItem('likedPets');
    let likedPetsList = (likedPets) ? JSON.parse(likedPets) : [];
    return likedPetsList;
};


export const likePet = (petId) => {

    let likedPetsList = getLikedPets();

    if (likedPetsList.includes(petId) === false) {

        likedPetsList.push(petId);
        localStorage.setItem('likedPets', JSON.stringify(likedPetsList));
        let petRef = firestore.collection("Cards_Data").doc(petId);

        if (auth.currentUser) {
            petRef.update({ likeCount: increment });
        } else {
            signInAnonymously(petRef);
        }
    }
};


export const unlikePet = (petId) => {

    let likedPetsList = getLikedPets();

    if (likedPetsList.includes(petId) === true) {

        let index = likedPetsList.indexOf(petId);

        if (index > -1) {
            likedPetsList.splice(index, 1);
        }
        localStorage.setItem('likedPets', JSON.stringify(likedPetsList));


        if (auth.currentUser) {
            let petRef = firestore.collection("Cards_Data").doc(petId);
            petRef.update({ likeCount: decrement });
        }
    }
};