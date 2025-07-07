

import app from "./app";
import mongoose from "mongoose";


const url = process.env.DB_URL;




const startServer =async  ()=>{

    try{

        await mongoose.connect(url);
        console.log("conected")


    }catch(error)
    {
        console.log(error.message)
    }



}

startServer();