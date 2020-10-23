// import React from 'react';
import React, { useState } from 'react';
import { switchSearchCategory } from '../../../store/headerSearch/action';
import { useSelector, useDispatch } from 'react-redux';

const HeaderImage = () => {

    const searchState = useSelector(state => state.headerSearchReducer);
    const dispatch = useDispatch();

    const handleCategorySwitch = (userChoice) => {
        dispatch(switchSearchCategory(userChoice));
    }

    return (
        <div className="header__mainImage">
            <input type="image" className="login-button" src={require('../../../images/login-icon.png')} alt="login-button" />
            <div className="search-container">
                {searchState.searchChoice == 0 ? <h3>true</h3> : <h3>false</h3>}
                <input type="image" className="search-button" src={require('../../../images/search-icon.png')} alt="search-button" />
                <button type="button" className="search-category-button" onClick={() => handleCategorySwitch(0)}>כלבים</button>
                <button type="button" className="search-category-button" onClick={() => handleCategorySwitch(1)}>חתולים</button>
                <button type="button" className="search-category-button">חיות אחרות</button>
                <button type="button" className="search-category-button">עמותות אימוץ</button>
            </div>
        </div>
    )
}

export default HeaderImage
