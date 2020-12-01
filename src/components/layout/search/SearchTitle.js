import React from 'react'

const SearchTitle = (props) => {
    return (
        <div className="search__title">
        <p>נמצאו 100 </p>
        <div class="dropdown">
            <button class="dropbtn">חיות</button>
            <div class="dropdown-content">
                <a href="#">חיות</a>
                <a href="#">כלבים</a>
                <a href="#">חתולים</a>
            </div>
        </div>
        <p> שמחכות לאימוץ באזור</p>
        <div class="dropdown">
            <button class="dropbtn">כל בארץ</button>
            <div class="dropdown-content">
                <a href="#">כל בארץ</a>
                <a href="#">צפון</a>
                <a href="#">מרכז</a>
                <a href="#">דרום</a>
            </div>
        </div>
    </div>
    )
}

export default SearchTitle
