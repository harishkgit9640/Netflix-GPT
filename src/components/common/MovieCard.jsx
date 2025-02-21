import React from 'react'
import { IMG_CDN_URL } from '../../utils/constants'

const MovieCard = ({ movie_poster_path }) => {
    if (!movie_poster_path) return null
    return (
        <div className='w-28 md:w-56 p-1 md:p-0 rounded-sm border-yellow-400 border-2 mr-2'>
            <img src={IMG_CDN_URL + movie_poster_path} alt="Movies_poster 1" />
        </div>
    )
}

export default MovieCard