import mongoose from "mongoose";

const planSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        unique:true
    },
    
})

export default mongoose.model("Planes", planSchema);