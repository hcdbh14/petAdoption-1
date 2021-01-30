import React, { useEffect } from 'react';
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
            dispatch(fetchPets(petsState.currentPage, pageSize.value, petsState.currentPage, petsState.searchInputs.petType, petsState.searchInputs.region, petsState.searchInputs.gender, petsState.searchInputs.ageGroup, true, petsState.searchInputs.name))
        }
    }

    useEffect(loadPets, [])
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
        dispatch(fetchPets(chosenPageNum.toString(), pageSize.value, chosenPageNum, petsState.searchInputs.petType, petsState.searchInputs.region, petsState.searchInputs.gender, petsState.searchInputs.ageGroup, false, petsState.searchInputs.name))
        window.scrollTo(0, 550)
    }

    const moveToStart = () => {
        dispatch(fetchPets("0", pageSize.value, 0, petsState.searchInputs.petType, petsState.searchInputs.region, petsState.searchInputs.gender, petsState.searchInputs.ageGroup, false, petsState.searchInputs.name))
        window.scrollTo(0, 550)
    }

    const moveToEnd = () => {
        let lastPage = parseInt(petsState.pageNum)
        lastPage -= 1
        dispatch(fetchPets(lastPage.toString(), pageSize.value, lastPage, petsState.searchInputs.petType, petsState.searchInputs.region, petsState.searchInputs.gender, petsState.searchInputs.ageGroup, false, petsState.searchInputs.name))
        window.scrollTo(0, 550)
    }

    const range = (start, end) => {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }

    const decideRange = () => {
        let start = 0
        let end = 0
        let totalPages = parseInt(petsState.pageNum)

        if (petsState.currentPage >= 5) {
            start = petsState.currentPage - 4
        } else {
            if (totalPages < 10) {
                return [...Array(totalPages).keys()];
            }
            return [...Array(10).keys()];
        }

        if (petsState.currentPage + 4 > totalPages) {
            end = totalPages - 1
        } else {
            end = petsState.currentPage + 4
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
                {decideRange().map((i) => <button key={i} onClick={() => moveToNextPage(i)} className={petsState.currentPage === i ? "search__currentPageButton" : "search__pageButton"}>{i + 1}</button>)}
                <button className="search__fastPageButton" onClick={() => moveToEnd()}>
                    <img className="search__pageArrow" src={require('../../../images/left-page-arrow.svg')} alt="חץ שמאל" />
                </button>
            </div>

            <Shelters />
        </div>
    )
}

export default Search
