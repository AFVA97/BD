import mongoose from "mongoose";

const asignaturaSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    },
    carrera:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Carrera'
    },
    facultad:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Facultad'
    },
    anno:{
        type:Number,
        required:true,
    },
    semestre:{
        type:Boolean,
        required:true,
    },
    tipocurso:{
        type:String,
        required:true,
    },
    cantgrupos:{
        type:Number,
        required:true,
    },
    horas:{
        type:Number,
        required:true,
    },
    profesor:{
        type:String,
        ref:'Profesor'
    },
    notas:{
        type:String,
    }
})

export default mongoose.model("Asignatura", asignaturaSchema);