import { useSelector } from 'react-redux';
import useFetchMovies from '../hooks/useFetchMovies';

const BackgroundVideo = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movie.trailerVideo);
    useFetchMovies(movieId)
    return (
        <div className='w-screen'>
            <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"} title="Netflix GPT Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>

        </div>
    )
}

export default BackgroundVideo
