import { useParams, useLoaderData, Outlet, Link, useNavigation} from "react-router-dom"
export const Film = ()=>{
    const {filmId} = useParams();
    const { backdrop_path, original_language, original_title, overview, release_date    } = useLoaderData();
    return(
       <div>
        <h1>{original_title}</h1>
        <img src="https://project-seo.net/wp-content/uploads/2019/10/404-not-found.jpg" alt="" />
        <p>original language: {original_language}</p>
        <p>description: {overview}</p>
        <p>release date: {release_date}</p>
       </div>
    )
}
