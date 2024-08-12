import mongoose from "mongoose";

const extunivSchema= new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        
    },
    fecha:{
        type:Date,
        required:true,
        
    },
    profesor:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'Profesor'
    },
    tipo:{
        type:String,
        required:true,
        
    },
    titulo:{
        type:String,
        required:true,
    },
    horas:{
        type:String,
        required:true
    }
})


export default mongoose.model('ExtUniv',extunivSchema)