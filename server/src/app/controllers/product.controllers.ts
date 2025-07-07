import { product as Product } from "../model/product.model";

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
    res.json({
      success: false,
      error: error.message,
      message: "Failed to insert product",
    });
  }
};

// get req








