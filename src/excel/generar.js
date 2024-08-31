const express = require('express');
const mongoose = require('mongoose');
const ExcelJS = require('exceljs');
const app = express();
const port = 3000;

// Conectar a la base de datos
mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', { useNewUrlParser: true, useUnifiedTopology: true });

// Definir el esquema y modelo de Mongoose
const Schema = mongoose.Schema;
const TuModeloSchema = new Schema({
    // Define tus campos aquí
    nombre: String,
    edad: Number,
    // Otros campos...
});
const TuModelo = mongoose.model('TuModelo', TuModeloSchema);

// Ruta para generar y enviar el archivo Excel
app.get('/descargar-excel', async (req, res) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Datos');

    // Agregar encabezados
    worksheet.columns = [
        { header: 'Nombre', key: 'nombre', width: 30 },
        { header: 'Edad', key: 'edad', width: 10 },
        // Otros encabezados...
    ];

    // Obtener datos de la base de datos
    const datos = await TuModelo.find().exec();

    // Agregar filas
    datos.forEach(dato => {
        worksheet.addRow(dato);
    });

    // Enviar el archivo Excel
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=datos.xlsx');

    await workbook.xlsx.write(res);
    res.end();
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
