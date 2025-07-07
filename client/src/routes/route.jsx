import { createBrowserRouter } from 'react-router-dom'
import MainLayoutes from '../MainLayoutes.jsx'
import Home from '../page/Home.jsx'
import ProductDetails from '../page/ProductDetails.jsx'



export const route = createBrowserRouter([



    {
        path: '',
        element: <MainLayoutes />,
        children: [

            {
                path: '/',
                element: <Home/>
            },
            {
                path:'/product/:id',
                element:<ProductDetails/>
            }
        ]
    }

])