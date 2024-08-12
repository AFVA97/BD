import mongoose, { mongo } from "mongoose";
import { number } from "zod";

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
        type:String,
        required:true,        
    },
    horas:{
        type:Number,
        required:true
    }
    
})


export default mongoose.model('Posgrado',posgradoSchema)