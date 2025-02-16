import MovieCard from "./MovieCard"

const MovieList = ({ title, movies_list }) => {
    return (
        <div className="px-5">
            <h1 className="text-2xl font-bold p-4 text-white" >{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar">
                <div className="flex px-3">
                    {
                        movies_list?.map((movie) => (
                            <MovieCard key={movie?.id} movie_poster_path={movie?.poster_path} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList