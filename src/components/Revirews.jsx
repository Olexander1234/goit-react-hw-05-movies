import { useLoaderData } from "react-router-dom";

    export const Revirews = ()=>{
        const films = useLoaderData();
        return(
            <div className="thumb">
         
            <ul>
                {films.map(({ id, author, content,avatar_path }) => (
                    <li key={id}>
                       <p>{author}</p>
                       <p>{content}</p>
                       <img src={`https://image.tmdb.org/t/p/w500${avatar_path}`} alt="" />
                    </li>
                ))}
            </ul>
        </div>
        )
    }