import mongoose from "mongoose";

const carreraSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        unique:true
    },
    facultad:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Facultad'
    }
})

export default mongoose.model("Carrera", carreraSchema);