import MovieCardSkeleton from "./MovieCardSkeleton"

const MovieContainer = ({ movieList, movieError, movieLoading }) => {
    return(
        <div className="app-container mb-32 mx-auto mt-4 max-w-11/12 px-4">
            {/* Error */}
            {movieError && (
                <div className="text-red-500 text-center my-4">
                    {movieError}
                </div>
            )}

            {/* Loading */}
            {movieLoading && (
                <div className="movie-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-1">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <MovieCardSkeleton key={i} />
                    ))}
                </div>
            )}
            
            {/* Grid tampil kalau tidak loading dan error */}
            {!movieLoading && !movieError && (
                <div className="movie-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-1">
                    {movieList}
                </div>
            )}
        </div>
    )
}

export default MovieContainer