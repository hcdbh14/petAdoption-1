import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';

const FavIconEmpty = (props) => {

    return (
        <IconButton aria-label="add to favorites" color="secondary" onClick={props.clicked} style={{
            zIndex: '1000',
            position: 'absolute',
            background: 'white',
            top: '65%',
            right: '30%',
            zIndex: "2"
        }}>
            <FavoriteBorderIcon style={{
                animation: 'fadeIn  1s',
                fontSize: '4rem',
            }} />
        </IconButton>

    )
}

export default FavIconEmpty

