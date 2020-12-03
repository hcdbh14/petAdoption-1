import React, { useEffect, useState } from 'react'
import ResponsibilitySide from './ResponsibilitySide';

import arrTop from '../../../images/arrTop.png';
import arrCenter from '../../../images/arrCenter.png';
import arrBottom from '../../../images/arrBottom.png';

const Responsibility = (props) => {
    const { styleColored, style } = props;
    const imageArray = [arrTop, arrCenter, arrBottom];
    const textRightArray = ['צריך לטייל איתי', 'לחנך אותי', 'לקחת מדי פעם לוטרינר'];
    const textLeftArray = ['צריך להאכיל', 'לשחק איתי', 'לאהוב אותי כמו שאני אותך'];

    const [scrollHieght, setscrollHieght] = useState({ reachedResponsibility: false })
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrollHieght])

    const handleScroll = e => {
        let element = e.target.scrollingElement
        let responsibility = document.getElementsByClassName("main__responsibility");
        if (element.scrollTop >= responsibility[0].clientHeight) {
            setscrollHieght({ reachedResponsibility: true })
        }
        else {
            setscrollHieght({ reachedResponsibility: false })
        }
    }
    return (
        <div className="main__responsibility">
            <div className="responsibility__title">
                <h2 style={styleColored} >קחו אחריות</h2> <h2 style={style}>לפני שלוקחים...</h2>
            </div>
            {scrollHieght.reachedResponsibility ?
                <div className="responsibility" >
                    <ResponsibilitySide side={"right"} imageArray={imageArray} textArray={textRightArray} />
                    <img src={require('../../../images/responsibility.png')} alt="pet image" className="responsibility__centerImage" />
                    <ResponsibilitySide side={"left"} imageArray={imageArray} textArray={textLeftArray} />
                </div> :
                null}
        </div>
    )
}

export default Responsibility