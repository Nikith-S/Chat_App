
import mongoose from "mongoose";
const mongoURI= "mongodb://127.0.0.1:27017/chatapplication?directConnection=true"
 const connectToMongo= async()=>{
    try{
        mongoose.set("strictQuery",false)
        mongoose.connect(mongoURI)
        console.log("Connected successfully")
    }
    catch(error){
        console.log(error)
        process.exit();

    }
    };

export default connectToMongo;
