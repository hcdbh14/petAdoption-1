import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';

const FavIconEmpty = (props) => {

    return (
        <IconButton aria-label="add to favorites" color="secondary" onClick={props.clicked} >
            <FavoriteBorderIcon style={{
                animation: 'fadeIn  1s',
                zIndex: '1000',
                position: 'absolute',
                background: 'white',
                bottom: '-6%',
                right: '18%',
            }} />
        </IconButton>

    )
}

export default FavIconEmpty

