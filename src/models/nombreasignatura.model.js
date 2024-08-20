import mongoose from "mongoose";

const nombreAsigSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        unique:true
    },
    
})

export default mongoose.model("NombreAsignatura", nombreAsigSchema);