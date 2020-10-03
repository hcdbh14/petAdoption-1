import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, postPet } from '../../store/user/actions'
import SearchSection from '../layout/homePage/SearchSection';
import PetsToAdoptSection from '../layout/homePage/PetsToAdoptSection';
import AboutSection from '../layout/homePage/AboutSection';
import Carousel from '../layout/carousel/Carousel';
const HomePage = () => {
    const userState = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    // const { userSearchInput, loading, error } = userState;
    useEffect(() => {
        // dispatch(fetchUsers())

    }, [])

    const handleClick = () => {
        dispatch(postPet(userState.petToPost, userState.userId))
    }
    return (
        <div>
            <h1>Homepage</h1>
            {/* <button onClick={handleClick}>ADD PET</button> */}
            <SearchSection />
            <PetsToAdoptSection />
            <AboutSection />
            <Carousel />
        </div>
    )
}

export default HomePage
