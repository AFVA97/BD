import mongoose from "mongoose";

const tipoExtSchema= new mongoose.Schema({
    tipo:{
        type:String,
        required:true,
        unique:true
    },
})


export default mongoose.model('TipoExt',tipoExtSchema)