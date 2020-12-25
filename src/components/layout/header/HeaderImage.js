import React, { useState } from 'react';


const HeaderImage = () => {

    return (
        <div className="main__shoutout">
                 {/* <img src={require('../../../images/dog-model.svg')} alt="pet with owner" className="main__shoutout" /> */}
                 <h2 className="main__shoutout__title">עמותות כלבים וחתולים הצטרפו אלינו! </h2>
              
                 <p className="main__shoutout__text">אנחנו נציגי העמותות קוראים לכם, להצטרף אלינו לאימוץ.
                     כדי שנוכל לעזור גם לכלבים וחתולים למצוא בית.
                 </p>
        </div>
    )
}

export default HeaderImage
