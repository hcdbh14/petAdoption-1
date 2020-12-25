import React, { useEffect, useState } from 'react'
import ResponsibilitySide from './ResponsibilitySide';

import arrTop from '../../../images/arrTop.png';
import arrCenter from '../../../images/arrCenter.png';
import arrBottom from '../../../images/arrBottom.png';

const Responsibility = (props) => {
    const { styleColored, style } = props;
    const imageArray = [arrTop, arrCenter, arrBottom];
    const textRightArray = ['לטייל איתי', 'לחנך אותי', 'לקחת לוטרינר'];
    const textLeftArray = ['להאכיל', 'לשחק איתי', 'לאהוב אותי'];

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const handleScroll = e => {
        const isElementInViewport = el => {
            const pixFromElementTop = 1;
            let rect = el.getBoundingClientRect();
            return (
                (rect.top + pixFromElementTop <= 0 && rect.bottom >= 0) ||
                (rect.bottom + pixFromElementTop >=
                    (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.top + pixFromElementTop <=
                    (window.innerHeight || document.documentElement.clientHeight)) ||
                (rect.top + pixFromElementTop >= 0 &&
                    rect.bottom + pixFromElementTop <=
                    (window.innerHeight || document.documentElement.clientHeight))
            );
        };
        let scroll =
            window.requestAnimationFrame ||
            // IE Fallback
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        let elementsToShow = document.querySelectorAll(".show-on-scroll");
        const loop = () => {
            Array.prototype.forEach.call(elementsToShow, function (element) {
                if (isElementInViewport(element)) {
                    element.classList.add("is-visible");
                } else {
                    element.classList.remove("is-visible");
                }
            });
            scroll(loop);
        };
        loop();
    }


    return (
        <div className="responsibility-section">
            <div className="responsibility__title">
                <h2 className="orange-text" style={styleColored} >קחו אחריות</h2> <h2 style={style}>לפני שלוקחים...</h2>
            </div>
            <div className="responsibility show-on-scroll" >
                <ResponsibilitySide side={"right"} imageArray={imageArray} textArray={textRightArray} />
                <img src={require('../../../images/responsibility.png')} alt="pet image" className="responsibility__centerImage show-on-scroll" />
                <ResponsibilitySide side={"left"} imageArray={imageArray} textArray={textLeftArray} />
            </div>
        </div>
    )
}

export default Responsibility