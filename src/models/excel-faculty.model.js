import mongoose from "mongoose";

const excel_faculty = new mongoose.Schema({
    // Define tus campos aquí
    nombre: String,
    edad: Number,
    // Otros campos...
});
export default mongoose.model('ExcelFaculty', excel_faculty);
