import React from 'react'

const ResponsibilitySide = (props) => {
    const { side, imageArray, textArray } = props;
    return (
        <div className={`responsibility__${side}`}>

            <div className={`responsibility__${side}-top show-on-scroll`}>
                <img src={imageArray[0]} alt="arrow" className={`responsibility__${side}-top-image `} />
                <p className={`responsibility__${side}-top-text`}>{textArray[0]}</p>
            </div>

            <div className={`responsibility__${side}-center show-on-scroll`}>
                <img src={imageArray[1]} alt="arrow" className={`responsibility__${side}-center-image `} />
                <p className={`responsibility__${side}-center-text`}>{textArray[1]}</p>
            </div>

            <div className={`responsibility__${side}-bottom show-on-scroll`}>
                <img src={imageArray[2]} alt="arrow" className={`responsibility__${side}-bottom-image `} />
                <p className={`responsibility__${side}-bottom-text`}>{textArray[2]}</p>
            </div>

        </div>
    )
}

export default ResponsibilitySide
