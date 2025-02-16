import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import BackgroundVideo from './BackgroundVideo';

const MainContainer = () => {
    const movies = useSelector((store) => store.movie?.allMovies);
    // console.log(movies[0]?.movies_list?.[0]);
    if (!movies[0]?.movies_list) return
    const { original_title, overview, id } = movies[0]?.movies_list?.[0];

    return (
        <>
            <VideoTitle title={original_title} overview={overview} />
            <BackgroundVideo movieId={id} />
        </>
    )
}

export default MainContainer