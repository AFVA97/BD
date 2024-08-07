import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    ciuser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Profesor',
    },
    facuser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Facultad'
    },
    active:{
        type:Boolean,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})


export default mongoose.model('User',userSchema)