import { createBrowserRouter} from "react-router-dom"
import { App } from "./App"
import {Home} from "./Home"
import {Movies} from './Movies'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>, 
        children: [
            {
                element: <Home/>,
                index: true,
            },
            {
                path: '/movies',
                element: <Movies/>,
            }
        ]
    }
])