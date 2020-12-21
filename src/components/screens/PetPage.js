import React, { useEffect } from 'react'
import PetImage from '../pet/PetImage';
import PetDemography from '../pet/PetDemography';
import PetDetails from '../pet/PetDetails';
import { fetchPet } from '../../store/pets/action'
import { useDispatch } from 'react-redux';
const PetPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPet("J4LqW0qyh5UGoiZJ9GisJVqZ6GJ3"))
        return () => {
        }
    }, [])
    return (
        <div>
            <h1>pet page</h1>
            <PetImage />
            <PetDemography />
            <PetDetails />
        </div>
    )
}

export default PetPage
