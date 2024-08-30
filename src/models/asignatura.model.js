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
    frecuencia:{
        type:Number,
        required:true
    },
    tutoriaaa:{
        type:Number,
        
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
    comienzo:{
        type:Date,
        required:true,
    },
    finaliza:{
        type:Date,
        required:true,
    },
    profesor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Profesor'
    },
    exafinal:{
        type:Boolean,
        required:true
    },
    notas:{
        type:String,
    }
})

export default mongoose.model("Asignatura", asignaturaSchema);