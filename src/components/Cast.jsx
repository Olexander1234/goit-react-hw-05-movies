import { NavLink, useLoaderData } from "react-router-dom";

export const Cast = ()=>{
    const credit = useLoaderData();
    return(
        <ul>
        {credit.map(({ id, character, name, profile_path }) => (
            <li key={id}>
            <p>{character}</p>
            <p>{name}</p>
            <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="" />
            </li>
           
        ))}
    </ul>
    )
}