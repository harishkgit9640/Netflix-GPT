import React from 'react'
import { IMG_CDN_URL } from '../../utils/constants'

const MovieCard = ({ movie_poster_path }) => {
    if (!movie_poster_path) return null
    return (
        <div className='w-56 p-2'>
            <img src={IMG_CDN_URL + movie_poster_path} alt="Movies_poster 1" />
        </div>
    )
}

export default MovieCard