import { createBrowserRouter} from "react-router-dom"
import { App } from "./App"
import {Home} from "./Home"
import {Movies} from './Movies'
import { fetchFilms, fetchFilmsById, fetchFilmsByName, fetchFilmsCredit, fetchFilmsReviews } from "./service/fetchFilms"
import { Film } from "./Film"
import { Cast } from "./Cast"
import { Revirews } from "./Revirews"
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
                loader:  fetchFilmsByName
            }, 
            {
                path: '/movies/:movieId',
                element: <Film/>, 
                loader: fetchFilmsById, 
                children: [
                    {
                        path: '/movies/:movieId/cast',
                        element: <Cast/>,
                        loader:  fetchFilmsCredit
                    }, 
                    {
                        path: '/movies/:movieId/revirews',
                        element: <Revirews/>,
                        loader: fetchFilmsReviews
                    }
                ]
            }
        ]
    }
])