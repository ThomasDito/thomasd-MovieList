import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieWrapper = ({ getMovie }) => {
    return(
        <div className='movie-wrapper group mx-auto max-w-11/12 w-80 sm:w-60 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out sm:hover:scale-110 hover:bg-zinc-900' key={getMovie.id}>
            <div className='block aspect-9/13 w-full overflow-hidden bg-zinc-700 rounded-3xl'>
                <img 
                src={`${import.meta.env.VITE_BASEIMGURL}/${getMovie.poster_path}`} 
                alt="movie poster not available" loading='eager' className='h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-125'/>
            </div>
            <div className="desc-card flex flex-col p-2.5 text-center sm:text-start transition-all duration-500 ease-in-out">
                <div className="movie-title max-w-11/12 mx-auto sm:mx-0 text-lg sm:text-base font-semibold text-center sm:text-start">
                    {`${getMovie.title} (${getMovie.release_date.split('-')[0]})`}
                </div>
                <div className="text-base opacity-80">Release: {getMovie.release_date}</div>
                <div className="rate flex justify-center sm:justify-start">
                    <div>
                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-xs' />
                    </div>
                    <div className="text-red-600 underline">{getMovie.vote_average.toFixed(2)}</div>
                </div>
            </div>
        </div>
    )
}

export default MovieWrapper