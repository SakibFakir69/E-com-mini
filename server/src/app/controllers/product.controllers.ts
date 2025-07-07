
import {  product as Product } from "../model/product.model";


// post req

export const createProduct = async (req, res) => {
  try {
    const productData = new Product(req.body);
    await productData.save();
    res.status(201).json({
      success: true,
      data: productData,
      message: "Product inserted successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.staus(500).json({
      success: false,
      error: error.message,
      message: "Failed to insert product",
    });
  }
};

// get req

export const getProducts = async (req, res) => {
  try {

    const allProducts =await  Product.find();
    if(!allProducts)
    {
        return res.status(404).json({
            success:false,
            message:"product not found"

        })
    }

    res.json({
        success:true,
        data:allProducts,
        message:"Product fetch successfully"
    })



  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Failed to fetch product",
    });
  }
};
