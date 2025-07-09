import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useallProducts from "../hook/useallProducts";
import ContextProvider, { ContextProviderApi } from "../context/ContextProvider";



function ProductDetails() {
  const { data, isLoading, isError, refetch } = useallProducts();

  const {cartItem, setCartItem} = useContext(ContextProviderApi)

  const { id } = useParams();
  const allProducts = data?.data || [];

  console.log(id);
  const productData = allProducts.find((product) => product._id === id);
  console.log(productData);

  const { title, rating, brand, price, description, image, tags, stock } =
    productData;
  // rating use react rating



  // handel add to cart 

  const handelCart = (product)=>{

    if(!product){
      alert("not add to cart");
      return;
    }

    setCartItem([...cartItem, product]);
    console.log("product add to cart",product)



  }

  return (
    <div className="p-8 bg-[#F9FAFB] w-full">

      <section className="flex gap-x-5 w-full justify-center items-center">
        <div className="border ">
          <img src={image} alt={title} className="border" />
        </div>
        <div className="flex flex-col  gap-y-2">
          <h2 className="md:text-3xl text-xl font-semibold ">{title}</h2>
          <p>{description}</p>
          <b>{rating}</b>
          
        
          <p> <span className="text-stone-600">Brand:</span><strong> {brand}</strong> </p>
          <p>  <b> stock:{stock}</b> </p>
          <b className="text-">${price}</b>

          <div>
            <button onClick={()=> handelCart(productData)} className="px-10 py-2 bg-blue-600 text-white font-semibold rounded">Add to Cart</button>
            {/* send data to cart, use arr [ {} , {} , {} useContext,reducce for price have -/+ button */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
