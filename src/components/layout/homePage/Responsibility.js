import React, { useEffect, useState } from 'react'

const Responsibility = (props) => {
    const { styleColored, style } = props;

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
            <h1 style={styleColored}>קחו אחריות</h1> <h1 style={style}>לפני שלוקחים...</h1>
            {scrollHieght.reachedResponsibility ?
                <div className="main__responsibility__images" >
                    <img src="../../../images/responsibility-right.png" alt="responsibility text" className="main__responsibility-right" />
                    <img src="../../../images/responsibility.png" alt="pet image" className="main__responsibility-center" />
                    <img src="../../../images/responsibility-left.png" alt="responsibility text" className="main__responsibility-left" />
                </div> :
                null}
        </div>
    )
}

export default Responsibility
