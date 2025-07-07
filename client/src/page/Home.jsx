


import React from 'react'
import useallProducts from '../hook/useallProducts'
import Card from '../shared/Card';

function Home() {

  const {data,isLoading,isError,refetch} = useallProducts();

//   laoding , error handel

  const allProducts = data?.data || [];



    






  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-6 p-8'>

        {
            allProducts.map((product, key)=>(
                <Card _id={product._id} key={key} title={product.title} image={product.image} price={product.price}/>
            ))
        }



    </div>
  )
}

export default Home