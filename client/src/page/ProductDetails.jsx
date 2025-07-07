import React from "react";
import { useParams } from "react-router-dom";
import useallProducts from "../hook/useallProducts";

function ProductDetails() {
  const { data, isLoading, isError, refetch } = useallProducts();

  const { id } = useParams();
  const allProducts = data?.data || [];

  console.log(id);
  const productData = allProducts.find((product) => product._id === id);
  console.log(productData);

 

  const { title, rating, brand, price, description, image, tags, stock } =
    productData;
  // rating use react rating

  return (
    <div>
      <section>
        <div>
          <img src={image} alt={title} className="border" />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <b>{rating}</b>
          <p>Brand {brand}</p>
          <b>${price}</b>

          <div>
            <button className="btn btn-active">Add to Cart</button>
            {/* send data to cart, use arr [ {} , {} , {} useContext,reducce for price have -/+ button */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
