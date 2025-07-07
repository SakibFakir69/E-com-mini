


import mongoose from 'mongoose';
const { Schema } = mongoose;


const productSchema = new Schema({

    image: { type: String, required: true, },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number },
    brand: { type: String, required: true },
    isStock: { type: Boolean, default: true },
    stock: { type: Number, required: true },
    rating: { type: Number },
    gallery: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    discountPrice: { type: Number },



}, { timestamps: true })

export const product = mongoose.model("product", productSchema);





