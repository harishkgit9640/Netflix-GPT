import { useSelector } from "react-redux";
import useFetchApi from "../hooks/useFetchApi";
import { API_URLS } from "../utils/constants";
import Header from "./Header"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
    const isGptMode = useSelector(state => state.setting.isGptMode)
    const allMovies = useSelector((store) => store?.movie?.allMovies);

    if (!allMovies || allMovies.length === 0) {
        useFetchApi("Now Playing Movies", API_URLS[0]);
        useFetchApi("Popular Movies", API_URLS[1]);
        useFetchApi("Top Rated Movies", API_URLS[2]);
        useFetchApi("Upcoming Movies", API_URLS[3]);
    }

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