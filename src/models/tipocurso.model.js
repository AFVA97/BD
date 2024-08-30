import mongoose from "mongoose";

const tipoCursoSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        unique:true
    },
    
})

export default mongoose.model("TipoCurso", tipoCursoSchema);