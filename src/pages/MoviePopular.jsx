import { useEffect, useState, useRef } from "react";
import "./MovieHome.css";
import { getMoviePopular } from "../Api";
import NavbarProd from "../components/navigation/NavbarProd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MovieContainer from "../components/MovieContainer";
import PageButton from "../components/PageButton";
import Footer from "../components/navigation/Footer";

const MoviePopular = () => {
    const [stateMovies, setStateMovies] = useState([]); // state untuk tampung hasil request API, data list film nya
    const homeRef = useRef(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await getMoviePopular(page);
                setStateMovies(data.results);
                setTotalPages(data.total_pages);

                goto(homeRef.current); // biar tiap pindah page balik ke atas
            } catch (e) {
                setError("Gagal mengambil data film.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page]);

    // component untuk render card movieList, bagian key={} sekarang diisi dengan movie.id, tadinya pakai key={i}, karena kurang efisien
    const PopularMovieList = () => {
        return stateMovies.map((movie, i) => {
            return (
                <div
                className="movie-wrapper group mx-auto max-w-11/12 w-80 sm:w-60 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out sm:hover:scale-110 hover:bg-zinc-900"
                key={movie.id}
                >
                    <div className="block aspect-9/13 w-full overflow-hidden bg-zinc-700 rounded-3xl">
                        <img
                        src={`${import.meta.env.VITE_BASEIMGURL}/${movie.poster_path}`}
                        alt="movie poster not available"
                        loading="eager"
                        className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-125"
                        />
                    </div>
                    <div className="desc-card flex flex-col p-2.5 text-center sm:text-start transition-all duration-500 ease-in-out">
                        <div className="movie-title max-w-11/12 mx-auto sm:mx-0 text-lg sm:text-base font-semibold text-center sm:text-start">{`${movie.title} (${movie.release_date.split("-")[0]})`}</div>
                        <div className="text-base opacity-80">
                            Release: {movie.release_date}
                        </div>
                        <div className="rate flex justify-center sm:justify-start">
                            <div>
                                <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-xs" />
                            </div>
                            <div className="text-red-600 underline">
                                {movie.vote_average.toFixed(2)}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    // scroll function
    const goto = (el) => {
        if (!el) return;
        el.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    // console.log({ popularMovies: popularMovies })

    return (
        <div className="container mx-auto pt-32 sm:pt-36" ref={homeRef}>
            <NavbarProd />
            <div className="page-info flex max-w-11/12 mx-auto justify-center sm:justify-start mt-4 sm:ml-18 md:ml-20 lg:ml-22 xl:ml-24 2xl:ml-26">
                <h1 className="text-xl font-semibold">Popular</h1>
            </div>
            <MovieContainer
                movieError={error}
                movieLoading={loading}
                movieList={<PopularMovieList />}
            />
            <PageButton
                buttonPage={page}
                buttonSetPage={setPage}
                buttonTotalPages={totalPages}
                buttonLoading={loading}
            />
            <Footer
                homeScroll={() => goto(homeRef.current)}
            />
        </div>
    );
};

export default MoviePopular;
