import firebase from 'firebase'
import { auth, firebaseApp } from '../config/firebase';
import { signInAnonymously } from '../store/auth/action';

const firestore = firebaseApp.firestore();
const increment = firebase.firestore.FieldValue.increment(1);
const decrement = firebase.firestore.FieldValue.increment(-1);

export const getLikedPets = () => {

    var likedPets = localStorage.getItem('likedPets');
    console.log(likedPets);
    var likedPetsList = (likedPets) ? JSON.parse(likedPets) : [];
    console.log(likedPetsList);

    return likedPetsList;
};


export const likePet = (petId) => {

    var likedPetsList = getLikedPets();

    if (likedPetsList.includes(petId) === false) {
        
        likedPetsList.push(petId);
        localStorage.setItem('likedPets', JSON.stringify(likedPetsList));
        var petRef = firestore.collection("Cards_Data").doc(petId);

        if (auth.currentUser) {
            petRef.update({ likeCount: increment });
        } else {
            signInAnonymously();
            petRef.update({ likeCount: increment });
        }
    }
};


export const dislikePet = (petId) => {

    var likedPetsList = getLikedPets();

    if (likedPetsList.includes(petId) === true) {
        
        var index = likedPetsList.indexOf(petId);

        if (index > -1) {
            likedPetsList.splice(index, 1);
        }
        localStorage.setItem('likedPets', JSON.stringify(likedPetsList));
        

        if(auth.currentUser) {
            var petRef = firestore.collection("Cards_Data").doc(petId);
            petRef.update({ likeCount: decrement });
        }
    }
};