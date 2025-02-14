import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
const BackgroundVideo = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movie.trailerVideo);
    const dispatch = useDispatch();
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

    const getVideo = async () => {
        const res = await fetch(url, API_OPTIONS);
        const data = await res.json();
        const filteredData = data.results.filter((video) => video.type === "Trailer");
        const video = filteredData ? filteredData[0] : data.results[0];
        dispatch(addTrailerVideo(video));
        // console.log(video.key);
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