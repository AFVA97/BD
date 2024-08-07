import mongoose from "mongoose";

const profesorSchema= new mongoose.Schema({
    idUniversidad:{
        type:Number,
        required:true,
        unique:true
    },    
    ci:{
        type:String,
        required:true,
        unique:true
    },
    nombre:{
        type:String,
        required:true,
    },
    apellidos:{
        type:String,
        required:true,
    },
    graduado:{
        type:String,
        required:true
    },    
    funcionDireccion:{
        type:String,        
    },
    pagoHoras:{
        type:Number,
    }
})


export default mongoose.model('Profesor',profesorSchema)