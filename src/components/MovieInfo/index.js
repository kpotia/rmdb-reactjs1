import React from 'react'

// Components
import Thumb from '../Thumb'

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config' 

// Image
import NoImage from '../../images/no_images.jpg'

// styles
import { Wrapper, Content, Text } from './MovieInfo.style'

const MovieInfo = ({movie}) =>  (
        <div>
            <Wrapper >
                <Content>
                    <Thumb
                        image={
                            movie.poster_path 
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                        }

                        clickable={false}
                        alt='movie-thumb'
                    />
                </Content>
            </Wrapper>
            
        </div>
    )

export default MovieInfo
