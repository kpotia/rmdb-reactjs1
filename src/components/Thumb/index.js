import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// style 
import { Image } from './Thumb.style'

const Thumb = ({image, movieId, clickable, alt}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image alt={alt} src={image} />

            </Link>
        ):(
            <Image alt={alt} src={image} />
            )
        }
    </div>
)

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.string,
    clickable: PropTypes.bool,
    alt: PropTypes.string,
}

export default Thumb;