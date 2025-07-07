import {createBrowserRouter} from 'react-router-dom'
import MainLayoutes from '../MainLayoutes'



export const route = createBrowserRouter([


    {
        path:'',
        element:<MainLayoutes/>,
        children:[

            {
                path:'/',
                element:<h1>Home</h1>
            }
        ]
    }
])