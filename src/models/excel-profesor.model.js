import mongoose from "mongoose";

const excel_profesor = new mongoose.Schema({
    // Define tus campos aquí
    nombre: String,
    edad: Number,
    // Otros campos...
});
export default mongoose.model('ExcelProfesor', excel_profesor);
