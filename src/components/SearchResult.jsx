import React from 'react'
import MovieList from '../components/MovieList';
import { useSelector } from 'react-redux';
const SearchResult = () => {
    const { movies_name, movies_array } = useSelector((store) => store?.movie)
    if (!movies_name) return null;
    return (
        <div className='p-4 my-4 bg-black mx-auto'>
            <div className="movie_row">
                {movies_name.map((movie_name, index) => (<MovieList key={movie_name} title={movie_name} movies_list={movies_array[index]} />))}
            </div>
        </div>
    )
}

export default SearchResult