


import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'
function useallProducts() {


    const {data, isLoading, isError, refetch,} = useQuery({
        queryKey:['product'],
        queryFn:async()=> {
            const result =await axios.get('https://e-com-mini.onrender.com/api/products');
            return result.data;
        }
    })



  return {data,isLoading,isError,refetch};

}

export default useallProducts