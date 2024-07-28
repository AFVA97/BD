import mongoose from "mongoose";

const facSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        unique:true
    },
    abreviatura:{
        type:String,
        required:true,
        unique:true
    }
})

export default mongoose.model("Facultad", facSchema);