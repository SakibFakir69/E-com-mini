import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useallProducts from "../hook/useallProducts";
import ContextProvider, {
  ContextProviderApi,
} from "../context/ContextProvider";
import Rating from "react-rating";

function ProductDetails() {
  const { data, isLoading, isError, refetch } = useallProducts();

  const { cartItem, setCartItem } = useContext(ContextProviderApi);

  const { id } = useParams();
  const allProducts = data?.data || [];

  console.log(id);
  const productData = allProducts.find((product) => product._id === id);
  console.log(productData);

  const { title, rating, brand, price, description, image, tags, stock,discountPrice } =
    productData;
  // rating use react rating

  // handel add to cart

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
    <div className="p-8 bg-[#F9FAFB] w-full">
      <section className="md:flex gap-x-5 w-full justify-center items-center border  shadow rounded  border-white p-5 md:h-[370px] ">
        <div className=" flex flex-col">
          <img src={image} alt={title} className=" md:h-[250px] h-180px " />
        </div>
        <div className="flex flex-col  gap-y-2">
          <h2 className="md:text-3xl text-xl font-semibold ">{title}</h2>
          <p>{description}</p>

         <div className="flex ga-x-2  justify-start">
           <b>{rating}</b>
          <Rating
            readonly
            initialRating={rating}
            emptySymbol={<span className="text-gray-400 text-xl">☆</span>}
            fullSymbol={<span className="text-yellow-400 text-xl">★</span>}
          />
         </div>

          <p>
            {" "}
            <span className="text-stone-600">Brand:</span>
            <strong> {brand}</strong>{" "}
          </p>
          <p>
            {" "}
            <p> stock:{stock}</p>{" "}
          </p>

          <del className="text-">${price}</del>
          <strong>${discountPrice}</strong>

          

          <div>
            <button
              onClick={() => handelCart(productData)}
              className="px-5 cursor-pointer py-1 bg-[#6366F1] text-white z-20 font-semibold rounded"
            >
              Add to Cart
            </button>
            {/* send data to cart, use arr [ {} , {} , {} useContext,reducce for price have -/+ button */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
