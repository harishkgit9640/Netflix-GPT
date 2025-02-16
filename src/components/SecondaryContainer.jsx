import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    // const moviesList = useSelector((store) => store?.movie?.nowPlayingMovies)
    const moviesCategory = useSelector((store) => store?.movie?.allMovies)
    return (
        <div className='bg-black'>
            <div className='relative -mt-52 z-10'>
                {moviesCategory?.map((movie) => (
                    <MovieList key={movie.category} title={movie?.category} movies_list={movie?.movies_list} />
                ))}
            </div>
        </div>
    )
}

export default SecondaryContainer