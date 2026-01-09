import axios from 'axios'

const apiKey = import.meta.env.VITE_APIKEY
const baseUrl = import.meta.env.VITE_BASEURL

export const getMovieList = async(page = 1) => {
    const response = await axios.get(
        `${baseUrl}/movie/now_playing?api_key=${apiKey}&page=${page}`
    )
    return response.data
}

export const getMoviePopular = async(page = 1) => {
    const response = await axios.get(
        `${baseUrl}/movie/popular?api_key=${apiKey}&page=${page}`
    )
    return response.data
}

export const getMovieTopRated = async(page = 1) => {
    const response = await axios.get(
        `${baseUrl}/movie/top_rated?api_key=${apiKey}&page=${page}`
    )
    return response.data
}

export const getMovieUpcoming = async(page = 1) => {
    const response = await axios.get(
        `${baseUrl}/movie/upcoming?api_key=${apiKey}&page=${page}`
    )
    return response.data
}

export const getMovieTrending = async(page = 1) => {
    const response = await axios.get(
        `${baseUrl}/trending/movie/day?api_key=${apiKey}&page=${page}`
    )
    return response.data
}

export const searchMovie = async(q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
    return search.data
}