import { useEffect, useState, useRef } from "react";
import "./MovieHome.css";
import { getMovieList, searchMovie } from "../Api";
import NavbarProd from "../components/navigation/NavbarProd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MovieContainer from "../components/MovieContainer";
import Footer from "../components/navigation/Footer";

const Search = () => {
  const [stateMovies, setStateMovies] = useState([]); // state untuk tampung hasil request API, data list film nya
  const homeRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await getMovieList();
        setStateMovies(result.results);

        goto(homeRef.current);
      } catch (e) {
        setError("Gagal mengambil data film.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const MovieList = () => {
    return stateMovies.map((movie) => {
      return (
        <div
          className="movie-wrapper group mx-auto max-w-11/12 w-80 sm:w-60 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out sm:hover:scale-110 hover:bg-zinc-900"
          key={movie.id}
        >
          <div className="block aspect-9/13 w-full overflow-hidden bg-zinc-700 rounded-3xl">
            <img
              src={`${import.meta.env.VITE_BASEIMGURL}/${movie.poster_path}`}
              alt="movie poster not available"
              loading="lazy"
              className="h-full w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-125"
            />
          </div>
          <div className="desc-card flex flex-col p-2.5 text-center sm:text-start transition-all duration-500 ease-in-out">
            <div className="movie-title max-w-11/12 mx-auto sm:mx-0 text-lg sm:text-base font-semibold text-center sm:text-start">{`${
              movie.title
            } (${movie.release_date.split("-")[0]})`}</div>
            <div className="text-base opacity-80">
              Release: {movie.release_date}
            </div>
            <div className="rate flex justify-center sm:justify-start">
              <div>
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-yellow-400 text-xs"
                />
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

  // function search
  const search = async (q) => {
    if (q.length === 0) {
      const result = await getMovieList();
      setStateMovies(result.results);
    } else if (q.length >= 2) {
      const query = await searchMovie(q);
      setStateMovies(query.results);
    }
  };

  // scroll up
  const goto = (el) => {
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // console.log({ popularMovies: popularMovies })

  return (
    <div className="container mx-auto pt-32" ref={homeRef}>
      <NavbarProd />
      <div className="movie-search mx-auto max-w-11/12 w-full md:w-fit mb-4">
        <input
          placeholder="cari film kesayangan..."
          className="max-w-prose bg-zinc-800 text-[aliceblue] h-11 text-base/loose my-4 px-6 py-7 w-full md:w-160 rounded-3xl transition-all duration-300 ease-in-out hover:bg-zinc-700 hover:scale-110 focus:scale-110"
          onChange={({ target }) => search(target.value)}
        />
      </div>
      <MovieContainer
        movieError={error}
        movieLoading={loading}
        movieList={<MovieList />}
      />
      <Footer homeScroll={() => goto(homeRef.current)} />
    </div>
  );
};

export default Search;
