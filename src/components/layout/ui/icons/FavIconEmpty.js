import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';

const FavIconEmpty = (props) => {

    return (
        <IconButton aria-label="add to favorites" color="secondary" onClick={props.clicked} >
            <FavoriteBorderIcon style={{
                fontSize: '4rem',
                animation: 'fadeIn  1s',
                // zIndex: '1000',
                // position: 'absolute',
                // fontSize: '7rem',
                // color: 'red',
                // background: 'white',
                // borderRadius: '50%',
                // padding: '1rem',
                // bottom: '0',
                // right: '50%',
            }} />
        </IconButton>

    )
}

export default FavIconEmpty
