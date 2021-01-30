import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPets, updateFilter } from '../../../store/pets/action';
import { Link } from 'react-router-dom';
import { SEARCH } from '../../constants/routes';

const SearchBar = () => {

    const [nameText, setNameText] = useState("")
    const dispatch = useDispatch();
    const petsState = useSelector(state => state.petsReducer);

    const handleTextChange = (newText) => {
        setNameText(newText.target.value)
        petsState.searchInputs.name = newText.target.value
    }

    const loadPets = () => {
        petsState.searchInputs.petType = ""
        petsState.searchInputs.region = ""
        petsState.searchInputs.gender = ""
        petsState.searchInputs.ageGroup = ""
        dispatch(fetchPets(0, 12, 0, petsState.searchInputs.petType, petsState.searchInputs.region, petsState.searchInputs.gender, petsState.searchInputs.ageGroup, true, nameText))
        window.scrollTo(0, 550)
    }

    const searchByName = () => {
        petsState.searchInputs.petType = ""
        petsState.searchInputs.region = ""
        petsState.searchInputs.gender = ""
        petsState.searchInputs.ageGroup = ""
        petsState.searchInputs.name = nameText
        dispatch(updateFilter())
    }

    const style = ({
        paddingTop: "5px",
        color: "#fff",
        fontSize: "3.3rem"
    })
    return (
        <div className="searchBar">
            <form>
                <input className="searchBar__textField" type="text" placeholder="חיפוש לפי שם" onChange={handleTextChange} />
            </form>

            {window.location.href.includes(SEARCH) ?
                <button className="searchBar__submit" onClick={loadPets} aria-label="כפתור חפש לפי שם">
                    <SearchIcon style={style} />
                </button>
                :
                <Link to={SEARCH}>
                    <button className="searchBar__submit" onClick={searchByName} aria-label="כפתור חפש לפי שם">
                        <SearchIcon style={style} />
                    </button>
                </Link>
            }
        </div>
    )
}

export default SearchBar
