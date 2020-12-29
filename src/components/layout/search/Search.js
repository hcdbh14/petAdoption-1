import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Title from './Title';
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

    const petTypeHandleChange = (pickedValue) => {
        petsState.searchInputs.petType = pickedValue.target.value
        dispatch(updateFilter())
    }

    const regionHandleChange = (pickedValue) => {
        petsState.searchInputs.region = pickedValue.target.value
        dispatch(updateFilter())
    }

    const genderHandleChange = (pickedValue) => {
        petsState.searchInputs.gender = pickedValue.target.value
        dispatch(updateFilter())
    }

    const ageGroupHandleChange = (pickedValue) => {
        petsState.searchInputs.ageGroup = pickedValue.target.value
        dispatch(updateFilter())
    }

    return (
        <div className="search">
            <Title />
            {petsState.error !== "" ?
                <h1>error</h1>
                : (petsState.loading ?
                    <h1>loading</h1>
                    :
                    <div>
                        <h1>pets count is {petsState.count}</h1>
                        <h1>Number of pages we need {Math.trunc((petsState.count + 9 - 1) / 9)}</h1>
                        <div class="select">
                            <select ref={(input) => pageNumber = input}>
                                <option value="0">pageNumber</option>
                                <option value="2">1</option>
                                <option value="3">2</option>
                                <option value="4">3</option>
                            </select>

                            <select ref={(input) => pageSize = input}>
                                <option value="">pageSize</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>

                            <select value={petsState.searchInputs.petType} onChange={petTypeHandleChange}>
                                <option value="">סוג חיה</option>
                                <option value="dog">כלב</option>
                                <option value="cat">חתול</option>
                                <option value="other">אחר</option>
                            </select>

                            <select value={petsState.searchInputs.region} onChange={regionHandleChange}>
                                <option value="">אזור</option>
                                <option value="north">צפון</option>
                                <option value="center">מרכז</option>
                                <option value="south">דרום</option>
                            </select>

                            <select value={petsState.searchInputs.gender} onChange={genderHandleChange}>
                                <option value="">מין</option>
                                <option value="male">זכר</option>
                                <option value="female">נקבה</option>
                            </select>

        
                            <select value={petsState.searchInputs.ageGroup} onChange={ageGroupHandleChange}>
                                <option value="">גיל</option>
                                <option value="young">צעיר</option>
                                <option value="adult">בוגר</option>
                                <option value="elder">מבוגר</option>
                            </select>
                        </div>

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
