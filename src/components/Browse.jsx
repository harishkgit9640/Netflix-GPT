import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header"

const Browse = () => {

    const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

    const getMovies = async () => {
        const res = await fetch(url, API_OPTIONS);
        const data = await res.json();
        console.log(data.results);
    }

    useEffect(() => {
        getMovies();
    }, [])


    return (
        <>
            <Header />
            <div>Browse</div>
        </>
    )
}

export default Browse