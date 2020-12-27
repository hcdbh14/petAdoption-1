import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Title from './Title';
import { fetchPets } from '../../../store/pets/action';

const Search = () => {

    var needCount = false
    var pageNumber = ""
    var pageSize = ""
    var petType = ""
    var region = ""
    var gender = ""
    var ageGroup = ""
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
                    <br />
                    <br />
                </div>)
        })
    ) : (
            <div> No pets yet</div>
        )

    const fetchPetsClick = () => {
        if (pageNumber.value == 0) {
            needCount = true
        } else {
            needCount = false
        }
        dispatch(fetchPets(pageNumber.value, pageSize.value, petType.value, region.value, gender.value, ageGroup.value, needCount))
    }

    return (
        <div className="search">
            <petsList />
            <Title />
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

                <select ref={(input) => petType = input}>
                    <option value="">סוג חיה</option>
                    <option value= "dog">כלב</option>
                    <option value="cat">חתול</option>
                    <option value="other">אחר</option>
                </select>

                <select ref={(input) => region = input}>
                    <option value="">אזור</option>
                    <option value="north">צפון</option>
                    <option value="center">מרכז</option>
                    <option value="south">דרום</option>
                </select>

                <select ref={(input) => gender = input}>
                    <option value="">מין</option>
                    <option value="male">זכר</option>
                    <option value="female">נקבה</option>
                </select>

                <select ref={(input) => ageGroup = input}>
                    <option value="">גיל</option>
                    <option value="young">צעיר</option>
                    <option value="adult">בוגר</option>
                    <option value="elder">מבוגר</option>
                </select>
            </div>

            <button onClick={fetchPetsClick}>fetchPets</button>
            <p>
                {petsList}
            </p>
        </div>
    )
}

export default Search
