import React from 'react'
import Navigation from '../Navigation'
import HeaderToggle from './HeaderToggle';
import SearchBar from '../ui/SearchBar';
import Loggo from '../ui/Loggo';


const Header = () => {
    // const [scrollHieght, setscrollHieght] = useState({ navOnTop: false })
    // useEffect(() => {
    //     window.addEventListener('scroll', makeSticky);
    //     return () => {
    //         window.removeEventListener('scroll', makeSticky);
    //     }
    // }, [scrollHieght])
    // const makeSticky = (e) => {
    //     let element = e.target.scrollingElement
    //     let position = element.getBoundingClientRect();
    //     let imageHeight = window.screen.width * 0.34;
    //     if (-position.top <= imageHeight) //check if scroll height equal to image height
    //         setscrollHieght({ navOnTop: false })
    //     else
    //         setscrollHieght({ navOnTop: true })
    // }

    // const stickyStyleContainer = {
    //     position: "fixed",
    //     width: "100vw",
    //     zIndex: '99999'
    // }

    // const stickyPadding = { paddingBottom: '14rem' }
    return (
        <div className="header" >

            <SearchBar />
            <div className="header__nav__container">
                <Navigation />
            </div>
            <Loggo />
            <HeaderToggle />
        </div>
    )
}

export default Header
