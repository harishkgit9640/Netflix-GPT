import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, API_URLS } from "../utils/constants";
import Header from "./common/Header"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearchPage from "./GptSearchPage";
import { addAllMovies } from "../store/movieSlice";
import { useEffect } from "react";

const Browse = () => {
    const dispatch = useDispatch();
    const isGptMode = useSelector(state => state.setting.isGptMode)
    const allMovies = useSelector((store) => store?.movie?.allMovies);

    const fetchMovies = async (url) => {
        const res = await fetch(url, API_OPTIONS);
        const data = await res.json();
        return data.results
    }

    const storeAllMovies = async () => {
        const moviesArray = API_URLS.map((movie) => fetchMovies(movie.url));
        const allMoviesResult = await Promise.all(moviesArray);
        API_URLS.map((movie, index) => dispatch(addAllMovies({ category: movie.title, movies_list: allMoviesResult[index] })))
    }

    useEffect(() => {
        if (!allMovies || allMovies.length === 0) {
            storeAllMovies();
        }
    }, [])


    return (
        <>
            <Header />
            {isGptMode ? <GptSearchPage /> :
                <>
                    <MainContainer />
                    <SecondaryContainer />

                </>
            }
        </>
    )
}

export default Browse