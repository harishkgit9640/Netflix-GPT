import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';
const BackgroundVideo = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movie.trailerVideo);
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

    return (
        <div><iframe width="560" height="315" src={"https://www.youtube.com/embed/" + trailerVideo?.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        </div>
    )
}

export default BackgroundVideo