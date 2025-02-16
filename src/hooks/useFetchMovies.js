import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";


const useFetchMovies = (movieId) => {
    const dispatch = useDispatch();
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

    const getVideo = async () => {
        const data = await fetch(url, API_OPTIONS);
        const response = await data?.json();
        const filteredVideo = response.results?.filter((video) => video.type === "Trailer");
        const trailer = filteredVideo.length ? filteredVideo[0] : response.results?.[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getVideo();
    }, [])

}

export default useFetchMovies