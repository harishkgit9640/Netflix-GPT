

import { useDispatch } from "react-redux";
import { addAllMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useFetchApi = async (title, url) => {
    const dispatch = useDispatch();
    const getMovies = async () => {
        const res = await fetch(url, API_OPTIONS);
        const data = await res.json();
        // console.log(data.results);
        dispatch(addAllMovies({ category: title, movies_list: data.results }));
    }
    useEffect(() => {
        getMovies();
    }, [url])
}

export default useFetchApi