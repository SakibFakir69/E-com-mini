

import app from './app.js';
import mongoose from 'mongoose';

const uri = process.env.DB_URI
const port = process.env.PORT || 5000;




const startServer =async  ()=>{

    try{
        if(!uri)
        {
            return "not found"
        }

        await mongoose.connect(uri);
        console.log("conected")

        app.listen(port, ()=>{
            console.log(`server running on this port ${port}`)
        })


    }catch(error)
    {
        console.log(error.message)
    }



}

startServer();