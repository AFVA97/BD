import mongoose from "mongoose";

const cursosSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    },
    comienzo:{
        type:Date,
        required:true,
    },
    finaliza:{
        type:Date,
        required:true,
    },
})

export default mongoose.model("Curso", cursosSchema);