import { NavLink, useLoaderData } from "react-router-dom";

export default function Home  () {
    const films = useLoaderData();

    return (
        <div className="thumb">
            <h1>Home page</h1>
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