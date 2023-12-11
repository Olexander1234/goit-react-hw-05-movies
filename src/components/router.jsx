import { createBrowserRouter} from "react-router-dom"
import { App } from "./App"
import {Home} from "./Home"
import {Movies} from './Movies'
import { fetchFilms, fetchFilmsById, fetchFilmsByKeyword } from "./service/fetchFilms"
import { Film } from "./Film"
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>, 
        children: [
            { 
                index: true,
                element: <Home/>,
                loader: fetchFilms
               
            },
            {
                path: '/movies',
                element: <Movies/>,
            }, 
            {
                path: '/movies/:movieId',
                element: <Film/>, 
                loader: fetchFilmsById
            }
        ]
    }
])