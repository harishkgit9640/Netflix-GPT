import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languages';
import useGemini from '../hooks/useGemini';
import { API_OPTIONS } from '../utils/constants';
import { addSearchResult } from '../store/movieSlice';

const SearchBar = () => {
    const userInput = useRef(null);
    const dispatch = useDispatch();
    const language = useSelector(state => state.setting.language)
    // console.log(language);

    const searchMovieTMDB = async (movie_name) => {
        const url = 'https://api.themoviedb.org/3/search/movie?query=' + movie_name + '&include_adult=false&page=1';
        const response = await fetch(url, API_OPTIONS);
        const data = await response.json();
        // console.log(data.results);
        return data.results
    }

    const handleChangeSearch = async () => {
        const search = userInput.current.value
        if (!search) { alert(`Please search something!`); return; };
        const searchQuery = "Act as movie recommendations system and suggest some movies for the query: " + search + "only give me name of 5 movies, comma separated.";
        const result = await useGemini(searchQuery);
        const moviesName = result.split(",")
        console.log(moviesName);
        const resultsArray = moviesName.map((movie_name) => searchMovieTMDB(movie_name));
        const allMovies = await Promise.all(resultsArray);
        dispatch(addSearchResult({ movies_name: moviesName, movies_array: allMovies }));
    }

    return (
        <div className='flex justify-center items-center'>
            <form className='flex justify-center items-center w-3/4 p-2' onSubmit={e => e.preventDefault()}>
                <input type="text" name="search" ref={userInput} className='w-3/4 px-6 py-2 shadow-black shadow-md outline-none rounded-md text-black' placeholder={lang[language].gptSearchPlaceholder} />
                <button className='px-6 py-2 mx-2 bg-red-600 text-white rounded-md shadow-black shadow-md' onClick={handleChangeSearch}> {lang[language].search} </button>
            </form>
        </div>
    )
}

export default SearchBar