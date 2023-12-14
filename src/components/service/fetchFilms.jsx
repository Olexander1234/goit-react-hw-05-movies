import axios from "axios";

const API_KEY = '098c0a06f6f788991ea9bd1b1a28f1b9';

export const fetchFilms = async () => {
    try {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const films = await data.data.results.slice(0, 10);
        return films;
    } catch (error) {
        console.error(error);
    }
}

export const fetchFilmsById = async ({ params }) => {
    try {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${API_KEY}&language=en-US`);
        const film = await data.data;
        return film;
    } catch (error) {
        console.error(error);
    }
};

export const fetchFilmsByName = async (searchQuery) => {
    try {
        const data = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${searchQuery}`
        );
        const films = await data.data.results.slice(0, 10);
        return films;
    } catch (error) {
        console.error(error);
    }
};