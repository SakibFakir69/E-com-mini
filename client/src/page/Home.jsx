


import React,{useContext} from 'react'
import useallProducts from '../hook/useallProducts'
import Card from '../shared/Card';
import { ContextProviderApi } from '../context/ContextProvider';

function Home() {

  const {data,isLoading,isError,refetch} = useallProducts();
  const { cartItem, setCartItem } = useContext(ContextProviderApi);

//   laoding , error handel

  const allProducts = data?.data || [];


    const handelCart = (product) => {
    const exist = cartItem.find((item) => item._id === product._id);

    if (exist) {
      setCartItem(
        cartItem.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };



    






  return (
    <div className=' p-8'>


      {
        isLoading ? (<div className='flex justify-center items-center w-full'><span className="loading loading-spinner md:size-24 size-10"></span></div>) : (<div className='grid md:grid-cols-3 grid-cols-1 gap-9 w-full'>

          {
            allProducts.map((product, key)=>(
                <Card _id={product._id} handelCart={handelCart} product={product} key={key} title={product.title} image={product.image} price={product.price}/>
            ))
        }

        </div>)
      }


        



    </div>
  )
}

export default Home