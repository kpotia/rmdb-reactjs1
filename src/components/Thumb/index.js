import React from 'react'
import { Link } from 'react-router-dom';

// style 
import { Image } from './Thumb.style'

const Thumb = ({image, movieId, clickable, alt}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image alt={alt} src={image} alt='movie-thumb' />

            </Link>
        ):(
            <Image alt={alt} src={image} alt='movie-thumb' />
            )
        }
    </div>
)

export default Thumb;