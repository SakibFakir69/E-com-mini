



import React, { createContext, useState } from 'react'

export const ContextProviderApi = createContext();


function ContextProvider({child}) {
    const [ cart , setCart ] = useState([]);
    // cart store here

    const info={
        cart , setCart
    }


  return (
    <div>

        <ContextProviderApi.Provider value={info}>

        </ContextProviderApi.Provider>



    </div>
  )
}

export default ContextProvider