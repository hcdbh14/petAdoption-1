import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Title from './Title';
import MiniSearch from './MiniSearch';
import { fetchPets, updateFilter } from '../../../store/pets/action';

const Search = () => {
    
        useEffect(()=>{
            loadPets()
        }, []) 

    var pageNumber = ""
    var pageSize = ""
    const dispatch = useDispatch();
    const petsState = useSelector(state => state.petsReducer);

    const petsList = petsState.searchResults.length > 0 ? (
        petsState.searchResults.map(pet => {
            return (
                <div key={pet.id}>
                    <p>{pet.petType} </p>
                    <p>{pet.region}</p>
                    <p>{pet.gender}</p>
                    <p>{pet.ageGroup}</p>
                    <img src={`data:image/png;base64, ${pet.image}`} />
                    <br />
                    <br />
                </div>)
        })
    ) : (
            <div> No pets yet</div>
        )

    const loadPets = () => {
        if (petsState.count === 0 || petsState.reload) {
            dispatch(fetchPets(pageNumber.value, pageSize.value, petsState.searchInputs.petType, petsState.searchInputs.region, petsState.searchInputs.gender, petsState.searchInputs.ageGroup, true))
        } 
    }

    const handleSearchClick = () => {
        dispatch(fetchPets(pageNumber.value, pageSize.value, petsState.searchInputs.petType, petsState.searchInputs.region, petsState.searchInputs.gender, petsState.searchInputs.ageGroup, true))
    }

    const moveToNextPage = (chosenPageNum) => {

        dispatch(fetchPets(chosenPageNum.toString(), pageSize.value, petsState.searchInputs.petType, petsState.searchInputs.region, petsState.searchInputs.gender, petsState.searchInputs.ageGroup, false))
    }

    return (
        <div className="search">
            <Title />
            <MiniSearch />
            {petsState.error !== "" ?
                <h1>error</h1>
                : (petsState.loading ?
                    <h1>loading</h1>
                    :
                    <div>
                        <h1>pets count is {petsState.count}</h1>
                        <h1>Number of pages we need {Math.trunc((petsState.count + 9 - 1) / 9)}</h1>
                        

                        <button onClick={handleSearchClick}>fetchPets</button>

                        <p>
                            {petsList}
                        </p>
                    </div>
                )}
            {Array.from(Array(petsState.pageNum)).map((x, i) => <button id={i} onClick={() => moveToNextPage(i)}>{i + 1}</button>)}

        </div>
    )
}

export default Search
