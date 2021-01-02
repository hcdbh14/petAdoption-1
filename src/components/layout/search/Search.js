import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MiniSearch from './MiniSearch';
import { fetchPets } from '../../../store/pets/action';
import Title from './Title';
import PetCard from '../pet/petCard';
import AdoptMeSection from '../homePage/AdoptMeSection'

const Search = () => {

    // remove later
    const styleColored = {
        display: 'inline-block', marginRight: '1rem'
    }
    const style = {
        display: 'inline-block'
    }
    // remove later

    const loadPets = () => {
        if (petsState.count === 0 || petsState.reload) {
            dispatch(fetchPets(pageNumber.value, pageSize.value, petsState.searchInputs.petType, petsState.searchInputs.region, petsState.searchInputs.gender, petsState.searchInputs.ageGroup, true))
        }
    }

    useEffect(loadPets, [])

    const [pageNumber, setPageNumber] = useState(0);
    // var pageNumber = ""
    var pageSize = ""
    const dispatch = useDispatch();
    const petsState = useSelector(state => state.petsReducer);

    const petsList = petsState.searchResults.length > 0 ? (
        petsState.searchResults.map(pet => {
            return (
                <div key={pet.id}>
                    <PetCard name={pet.name} goodWords={pet.goodWords} region={pet.region} age={pet.age} gender={pet.gender} image={pet.image} />
                    <br />
                    <br />
                </div>)
        })
    ) : (
            <div> No pets yet</div>
        )

    const moveToNextPage = (chosenPageNum) => {
        setPageNumber(chosenPageNum)
        dispatch(fetchPets(pageNumber.toString(), pageSize.value, petsState.searchInputs.petType, petsState.searchInputs.region, petsState.searchInputs.gender, petsState.searchInputs.ageGroup, false))
    }

    return (
        <div className="search">
            <MiniSearch />
            <Title />
            {petsState.error !== "" ?
                <h1>error</h1>
                : (petsState.loading ?
                    <h1>loading</h1>
                    :
                    <div>
                        <h1>pets count is {petsState.count}</h1>
                        <h1>Number of pages we need {Math.trunc((petsState.count + 9 - 1) / 9)}</h1>

                        <div className="search__results">
                            {petsList}
                        </div>
                    </div>
                )}
            <div className="search__pagingWrapper">
                <img className="search__pageArrow" src={require('../../../images/right-page-arrow.svg')} alt="חץ ימין" />
                {Array.from(Array(petsState.pageNum)).map((x, i) => <button id={i} onClick={() => moveToNextPage(i)} className= {pageNumber === i ? "search__currentPageButton" : "search__pageButton"}>{i + 1}</button>)}
                <img className="search__pageArrow" src={require('../../../images/left-page-arrow.svg')} alt="חץ שמאל" />
            </div>

            <AdoptMeSection styleColored={styleColored} style={style} />
        </div>
    )
}

export default Search
