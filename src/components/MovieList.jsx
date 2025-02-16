import MovieCard from "./MovieCard"

const MovieList = ({ title, moviesList }) => {
    // console.log(moviesList?.[0])
    return (
        <div className="px-3 bg-black">
            <h1 className="text-2xl font-bold p-4 text-white" >{title}</h1>
            <div className="flex overflow-x-scroll ">
                <div className="flex px-3">
                    {
                        moviesList?.map((movie) => (
                            <MovieCard key={movie?.id} movie_poster_path={movie?.poster_path} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList