import mongoose, { mongo } from "mongoose";

const posgradoSchema= new mongoose.Schema({
    profesor:{
        type:mongoose.Schema.ObjectId,
        required:true,
        
    },
    nombre:{
        type:String,
        required:true,
    },
    fecha:{
        type:Date,
        required:true,
    },
    impartido:{
        type:Boolean,
        required:true,
    },
    cantcuadros:{
        type:Number,
        required:true,
    },
    ubicacion:{
        type:String,
    },
    modalidad:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'TipoPosgrado'
    },
    
})


export default mongoose.model('Posgrado',posgradoSchema)