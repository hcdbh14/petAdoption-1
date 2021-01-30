import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPets, updateFilter } from '../../../store/pets/action';
import { Link } from 'react-router-dom';
import { SEARCH } from '../../constants/routes';
import wave from "../../../images/miniSearchMobile.png"
const MiniSearch = () => {

    const dispatch = useDispatch();
    const petsState = useSelector(state => state.petsReducer);

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
    
    const loadPets = () => {
        petsState.searchInputs.name = ""
        dispatch(updateFilter())
        if (petsState.count === 0 || petsState.reload) {
            dispatch(fetchPets(0, 12, 0, petsState.searchInputs.petType, petsState.searchInputs.region, petsState.searchInputs.gender, petsState.searchInputs.ageGroup, true, ""))
        }
        window.scrollTo(0, 550)
    }

    return (
        <div className="miniSearch">

            <div className="miniSearch__wrapper">
                <img src={wave} alt="wave" className="miniSearch__mobile" />
                <h2 className="miniSearch__title">חיפוש בעלי חיים</h2>

                <select className="miniSearch__dropdown" value={petsState.searchInputs.petType} onChange={petTypeHandleChange}>
                    <option value="">כל הסוגים</option>
                    <option value="כלב">כלב</option>
                    <option value="חתול">חתול</option>
                    <option value="אחר">אחר</option>
                </select>

                <select className="miniSearch__dropdown" value={petsState.searchInputs.region} onChange={regionHandleChange}>
                    <option value="">כל האזורים</option>
                    <option value="צפון">צפון</option>
                    <option value="מרכז">מרכז</option>
                    <option value="דרום">דרום</option>
                </select>

                <select className="miniSearch__dropdown" value={petsState.searchInputs.gender} onChange={genderHandleChange}>
                    <option value="">זכר ונקבה</option>
                    <option value="זכר">זכר</option>
                    <option value="נקבה">נקבה</option>
                </select>

                <select className="miniSearch__dropdown" value={petsState.searchInputs.ageGroup} onChange={ageGroupHandleChange}>
                    <option value="">כל הגילאים</option>
                    <option value="צעיר">צעיר</option>
                    <option value="בוגר">בוגר</option>
                    <option value="מבוגר">מבוגר</option>
                </select>

                {window.location.href.includes(SEARCH) ?
                    <button className="miniSearch__button" type="button" onClick={loadPets}>חיפוש</button>
                    :
                    <Link to={SEARCH}>
                        <button className="miniSearch__button" type="button">חיפוש</button>
                    </Link>
                }
            </div>
            <div className="miniSearch__animalSide">
                <picture>
                    <source srcSet={require('../../../images/search-dog.webp')} type="image/webp" />
                    <img src={require('../../../images/search-dog.png')} className="miniSearch__animalSide__image" alt="כלב מרחרח" />
                </picture>
            </div>
            <br />
            <div className="miniSearch__white-box" />
        </div>
    )
}

export default MiniSearch
