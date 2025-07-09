import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { route } from './routes/route.jsx'

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ContextProvider from './context/ContextProvider.jsx'
const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
        <QueryClientProvider client={queryClient}> 
        <RouterProvider router={route}/>

    </QueryClientProvider>

    </ContextProvider>
  
  
  </StrictMode>,
)
