import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const moviesList = useSelector((store) => store?.movie?.nowPlayingMovies)
    return (
        <div>
            <MovieList title={"Now Playing Movies"} moviesList={moviesList} />
            <MovieList title={"Trending Movies"} moviesList={moviesList} />
            <MovieList title={"Top Rated Movies"} moviesList={moviesList} />
            <MovieList title={"Upcoming Movies"} moviesList={moviesList} />
            <MovieList title={"Popular Movies"} moviesList={moviesList} />
        </div>
    )
}

export default SecondaryContainer