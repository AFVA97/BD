import mongoose from "mongoose";

const excel_admin = new mongoose.Schema({
    // Define tus campos aquí
    nombre: String,
    edad: Number,
    // Otros campos...
});
export default mongoose.model('ExcelAdmin', excel_admin);