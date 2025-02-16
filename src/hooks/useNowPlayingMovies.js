import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

    const getMovies = async () => {
        const res = await fetch(url, API_OPTIONS);
        const data = await res.json();
        // console.log(data.results);
        dispatch(addNowPlayingMovies(data.results));
    }
    useEffect(() => {
        getMovies();
    }, [])
}

export default useNowPlayingMovies