import React from 'react';
import { SEARCH } from '../../constants/routes';

const Shelters = () => {

    return (
        <>
            <div className="shelters">
                {window.location.href.includes(SEARCH) ?
                    <div className="shelters__rightPeekingImage">
                        <img src={require('../../../images/pets-peeking.png')} alt="pet with owner" className="shelters__image" />
                    </div>
                    :
                    <div className="shelters__leftPeekingImage">
                        <img src={require('../../../images/pets-peeking.png')} alt="pet with owner" className="shelters__image" />
                    </div>
                }
                <div className="shelters__wrapper">
                    <p className="shelters__title">עמותות שלנו</p>

                    <div className="shelters__content">
                        <p>מאות בעלי חיים מחכים לכם לאימוץ בסניפי עמותת תנו לחיות ברחבי הארץ.</p>
                        <p>בחרו את בעל החיים הרצוי, ובעזרת הסינונים השונים תוכלו למקד את החיפוש</p>
                        <p>ולמצוא את החייה המתאימה לכם לאימוץ.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Shelters
