// import React from 'react';
import React, { useState } from 'react';
import { switchSearchCategory } from '../../../store/headerSearch/action';
import { useSelector, useDispatch } from 'react-redux';






// const dogSearch = (
//     <div>
//             <input type="text" name="myText" value="Norway"
//                     selectBoxOptions="Canada;Denmark;Finland;Germany;Mexico"/> 
//     </div>
// )

const HeaderImage = () => {

    const searchState = useSelector(state => state.headerSearchReducer);
    const dispatch = useDispatch();

    const handleCategorySwitch = (userChoice) => {
    dispatch(switchSearchCategory(1));
    }       

    return (
        <div className="header__mainImage">
            {/* <img src="../../../images/headerImage.png" alt="pet with owner" className="header__image" /> */}
            <input type="image" className="login-button" src={require('../../../images/login-icon.png')} alt="login-button" />
            <div className="search-container">
            {searchState.searchChoice == 0 ? <h3>true</h3> : <h3>false</h3>}
            <input type="image" className="search-button" src={require('../../../images/search-icon.png')} alt="search-button" />
            <button type="button" className="search-category-button" onClick={handleCategorySwitch}>כלבים</button>
            <button type="button" className="search-category-button" onClick={handleCategorySwitch}>חתולים</button>
            <button type="button" className="search-category-button">חיות אחרות</button>
            <button type="button" className="search-category-button">עמותות אימוץ</button>
            {/* <input type="text" name="myText" value="Norway"
                    selectBoxOptions="Canada;Denmark;Finland;Germany;Mexico">  */}
            </div>
        </div>
    )
}

export default HeaderImage
