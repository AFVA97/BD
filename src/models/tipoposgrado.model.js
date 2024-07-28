import mongoose from "mongoose";

const tipoPosSchema= new mongoose.Schema({
    tipo:{
        type:String,
        required:true,
        unique:true
    },
})


export default mongoose.model('TipoPosgrado',tipoPosSchema)