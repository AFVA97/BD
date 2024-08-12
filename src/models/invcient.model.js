import mongoose, { mongo } from "mongoose";

const invcientSchema= new mongoose.Schema({
    profesor:{
        type:mongoose.Schema.ObjectId,
        required:true,
        
    },
    titulo:{
        type:String,
        required:true,
    },
    fecha:{
        type:Date,
        required:true,
    },
    descripcion:{
        type:String,
        required:true,
    },
    alcance:{
        type:String,
    },
    issbnn:{
        type:String,
    },
    autores:{
        type:String,
    },
    link:{
        type:String,
    },
    tipo:{
        type:String,
        required:true,
        
    },
    
})


export default mongoose.model('InvCient',invcientSchema)