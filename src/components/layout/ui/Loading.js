import React from 'react'

const Loading = () => {
    return (
        <div className="loading">
            <div className="loading__steps">

                <img src={require('../../../images/paw.svg')} alt="paw" className="loading__steps__paw-3" />
                <img src={require('../../../images/paw.svg')} alt="paw" className="loading__steps__paw-4" />
                <img src={require('../../../images/paw.svg')} alt="paw" className="loading__steps__paw-5" />
                <img src={require('../../../images/paw.svg')} alt="paw" className="loading__steps__paw-6" />
                <img src={require('../../../images/paw.svg')} alt="paw" className="loading__steps__paw-7" />
                <img src={require('../../../images/paw.svg')} alt="paw" className="loading__steps__paw-8" />
                <img src={require('../../../images/paw.svg')} alt="paw" className="loading__steps__paw-9" />
            </div>

        </div>
    )
}

export default Loading
