import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MiniSearch from './MiniSearch';
import { fetchPets } from '../../../store/pets/action';
import Title from './Title';
import PetCard from '../pet/PetCard';
import Shelters from '../homePage/Shelters'
import Loading from '../ui/Loading';

const Search = () => {

    const loadPets = () => {
        if (petsState.count === 0 || petsState.reload) {
            setPageNumber(0)
            dispatch(fetchPets(pageNumber.value, pageSize.value, petsState.searchInputs.petType, petsState.searchInputs.region, petsState.searchInputs.gender, petsState.searchInputs.ageGroup, true, petsState.searchInputs.name))
        }
    }

    useEffect(loadPets, [])

    const [pageNumber, setPageNumber] = useState(0);
    var pageSize = ""
    const dispatch = useDispatch();
    const petsState = useSelector(state => state.petsReducer);

    const petsList = petsState.searchResults.length > 0 ? (
        petsState.searchResults.map(pet => {
            return (
                <div key={pet.id}>
                    <PetCard pet={pet} />
                    <br />
                    <br />
                </div>)
        })
    ) : (
            <div className="search__noPets"> לא נמצאו חיות לפי הסינון הנוכחי.</div>
        )

    const moveToNextPage = (chosenPageNum) => {
        setPageNumber(chosenPageNum)
        dispatch(fetchPets(chosenPageNum.toString(), pageSize.value, petsState.searchInputs.petType, petsState.searchInputs.region, petsState.searchInputs.gender, petsState.searchInputs.ageGroup, false, petsState.searchInputs.name))
        window.scrollTo(0, 500)
    }

    const moveToStart = () => {
        setPageNumber(0)
        dispatch(fetchPets("0", pageSize.value, petsState.searchInputs.petType, petsState.searchInputs.region, petsState.searchInputs.gender, petsState.searchInputs.ageGroup, false, petsState.searchInputs.name))
        window.scrollTo(0, 500)
    }

    const moveToEnd = () => {
        let lastPage = parseInt(petsState.pageNum)
        setPageNumber(lastPage - 1)
        lastPage -= 1
        dispatch(fetchPets(lastPage.toString(), pageSize.value, petsState.searchInputs.petType, petsState.searchInputs.region, petsState.searchInputs.gender, petsState.searchInputs.ageGroup, false, petsState.searchInputs.name))
        window.scrollTo(0, 500)
    }

    const range = (start, end) => {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }

    const decideRange = () => {
        let start = 0
        let end = 0
        let totalPages = parseInt(petsState.pageNum)

        if (pageNumber >= 5) {
            start = pageNumber - 4
        } else {
            if (totalPages < 10) {
                return [...Array(totalPages).keys()];
            }
            return [...Array(10).keys()];
        }

        if (pageNumber + 4 > totalPages) {
            console.log()
            end = totalPages - 1
        } else {
            end = pageNumber + 4
        }

        return range(start, end)
    }

    return (
        <div className="search">
            <MiniSearch />
            <Title />
            {petsState.error !== "" ?
                <h1>error</h1>
                : (petsState.loading ?
                    <div className="search__results">
                    <Loading />
                    </div>
                    :
                    <div>
                        <div className="search__results">
                            {petsList}
                        </div>
                    </div>
                )}
            <div className="search__pagingWrapper">
                <button className="search__fastPageButton" onClick={() => moveToStart()}>
                    <img className="search__pageArrow" src={require('../../../images/right-page-arrow.svg')} alt="חץ ימין" />
                </button>
                {decideRange().map((i) => <button key={i} onClick={() => moveToNextPage(i)} className={pageNumber === i ? "search__currentPageButton" : "search__pageButton"}>{i + 1}</button>)}
                <button className="search__fastPageButton" onClick={() => moveToEnd()}>
                    <img className="search__pageArrow" src={require('../../../images/left-page-arrow.svg')} alt="חץ שמאל" />
                </button>
            </div>

            <Shelters />
        </div>
    )
}

export default Search
