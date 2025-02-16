import useFetchApi from "../hooks/useFetchApi";
import { API_URLS } from "../utils/constants";
import Header from "./Header"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
    useFetchApi("Now Playing Movies", API_URLS[0]);
    useFetchApi("Popular Movies", API_URLS[1]);
    useFetchApi("Top Rated Movies", API_URLS[2]);
    useFetchApi("Upcoming Movies", API_URLS[3]);
    return (
        <>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </>
    )
}

export default Browse