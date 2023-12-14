import { useParams, useLoaderData, Outlet, Link, useNavigation, useNavigate} from "react-router-dom"
export const Film = ()=>{
    
    const goBack = useNavigate();
    const {filmId} = useParams();
    const { backdrop_path, original_language, original_title, overview, release_date, id   } = useLoaderData();
    return(
       <div className="thumb">
          <button type='button' onClick={()=>goBack(-1)}>Go back</button>
        <h1>{original_title}</h1>
        <img src="https://project-seo.net/wp-content/uploads/2019/10/404-not-found.jpg" alt="" />
        <p>original language: {original_language}</p>
        <p>description: {overview}</p>
        <p>release date: {release_date}</p>
        <p>the other information: </p>
        <Link to={`/movies/${id}/cast`}>Cast</Link>
        <Link to={`/movies/${id}/revirews`}>Revirews</Link>
        <Outlet/>
       
   
       </div>
    )
}
