import excelAdminModel from "../models/excel-admin.model.js"
import excelFacultyModel from "../models/excel-faculty.model.js"
import excelProfesorModel from "../models/excel-profesor.model.js"
import  ExcelJS from 'exceljs';


export const getExcelAdmin=async (req, res) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Datos');

    // Agregar encabezados
    worksheet.columns = [
        { header: 'Nombre', key: 'nombre', width: 30 },
        { header: 'Edad', key: 'edad', width: 10 },
        // Otros encabezados...
    ];

    // Obtener datos de la base de datos
    const datos = await excelAdminModel.find().exec();

    // Agregar filas
    datos.forEach(dato => {
        worksheet.addRow(dato);
    });

    // Enviar el archivo Excel
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=datos.xlsx');

    await workbook.xlsx.write(res);
    res.end();
};

 export const getExcelFaculty =async(req, res) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Datos');

    // Agregar encabezados
    worksheet.columns = [
        { header: 'Nombre', key: 'nombre', width: 30 },
        { header: 'Edad', key: 'edad', width: 10 },
        // Otros encabezados...
    ];

    // Obtener datos de la base de datos
    const datos = await excelFacultyModel.find().exec();

    // Agregar filas
    datos.forEach(dato => {
        worksheet.addRow(dato);
    });

    // Enviar el archivo Excel
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=datos.xlsx');

    await workbook.xlsx.write(res);
    res.end();
};


 export const getExcelProfesor=async (req, res) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Datos');

    // Agregar encabezados
    worksheet.columns = [
        { header: 'Nombre', key: 'nombre', width: 30 },
        { header: 'Edad', key: 'edad', width: 10 },
        // Otros encabezados...
    ];

    // Obtener datos de la base de datos
    const datos = await excelProfesorModel.find().exec();

    // Agregar filas
    datos.forEach(dato => {
        worksheet.addRow(dato);
    });

    // Enviar el archivo Excel
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=datos.xlsx');

    await workbook.xlsx.write(res);
    res.end();
};