const MovieCardSkeleton = () => {
    return(
        <div className="movie-wrapper group mx-auto max-w-11/12 w-80 sm:w-60 rounded-3xl overflow-hidden bg-zinc-900 animate-pulse">
            {/* Poster */}
            <div className="skeleton block aspect-9/13 w-full bg-zinc-700 rounded-3xl" />

            {/* Desc */}
            <div className="desc-card flex flex-col p-2.5 gap-2">
                {/* Title */}
                <div className="skeleton h-5 w-11/12 bg-zinc-700 rounded" />

                {/* Release date */}
                <div className="skeleton h-4 w-8/12 bg-zinc-700 rounded" />

                {/* Rating */}
                <div className="flex items-center gap-2 mt-1">
                    <div className="skeleton h-3 w-3 bg-zinc-700 rounded-full" />
                    <div className="skeleton h-3 w-10 bg-zinc-700 rounded" />
                </div>

            </div>
        </div>
    )
}

export default MovieCardSkeleton