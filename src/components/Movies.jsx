import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import { fetchFilmsByName } from "./service/fetchFilms";
import debounce from "debounce";

export function Movies() {
    const [films, setFilms] = useState([]);
    const goBack = useNavigate();
    const [searchFilms, setSearchFilm] = useSearchParams();
    const searchFilm = searchFilms.get('title') ?? '';

    const updateQueryString = (title) => {
        setSearchFilm(title !== "" ? { title } : {});
    };

    useEffect(() => {
        const fetchFilms = async () => {
            const searchQuery = searchFilm;

           
            debounce(async () => {
                const data = await fetchFilmsByName(searchQuery);
                setFilms(data);
            }, 2000);
        };

        fetchFilms();
    }, [searchFilm]);

    return (
        <div className="thumb">
            <h1>Movies</h1>
            <button type='button' onClick={() => goBack(-1)}>Go back</button>
            <input type="text" value={searchFilm} onChange={(e) => updateQueryString(e.target.value)} />
            <ul>
                {films.map(({ id, original_title }) => (
                    <li key={id}>
                        <NavLink to={`/movies/${id}`}>{original_title}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}