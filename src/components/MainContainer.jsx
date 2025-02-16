import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import BackgroundVideo from './BackgroundVideo';

const MainContainer = () => {

    const movies = useSelector((store) => store.movie?.nowPlayingMovies);
    if (!movies) return
    // console.log(movies[0]);
    const { original_title, overview, vote_average, id } = movies[0];

    return (
        <>
            <VideoTitle title={original_title} overview={overview} />
            <BackgroundVideo movieId={id} />
        </>
    )
}

export default MainContainer