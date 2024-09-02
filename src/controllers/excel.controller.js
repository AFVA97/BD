import excelAdminModel from "../models/excel-admin.model.js"
import excelFacultyModel from "../models/excel-faculty.model.js"
import excelProfesorModel from "../models/excel-profesor.model.js"
import  ExcelJS from 'exceljs';
import { getAsignaturas } from "./asignatura.controller.js";
import { getCarreras } from "./carrera.controller.js";
import Asignatura from "../models/asignatura.model.js";
import Carrera from "../models/carrera.model.js";
import Profesor from '../models/profesor.model.js'
import mongoose from "mongoose";


export const getExcelAdmin=async (req, res) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Datos');
//////
//////
//////LOS MODELOS PIENSO NO USARLOS
//////
//////
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
    const worksheetGeneral = workbook.addWorksheet('General');

    // Agregar encabezados
    worksheetGeneral.columns = [
        { header: 'Carrera', key: 'carrera', width: 30 },
        { header: 'Cantidad de Asignturas', key: 'ca', width: 10 },
        { header: 'Cantidad de Grupos', key: 'cg', width: 10 },
        { header: 'Cantidad de Examense Finales', key: 'cef', width: 10 },
        { header: 'Total de Horas', key: 'horas', width: 10 },
        // Otros encabezados...
    ];
    const idFac=req.params._id
    
    let asignaturas = await Asignatura.find({facultad:idFac});
   
    const carreras=await Carrera.find({facultad:idFac});
   
   
      let carrerasInicio=[]
     
       if(carreras.length>0){
        carreras.map((carrera)=>{
         const worksheet=workbook.addWorksheet(carrera.nombre)
         worksheet.columns = [
            { header: 'Asignatura', key: 'asignatura', width: 30 },
            { header: 'Tipo de Curso', key: 'tp', width: 10 },
            { header: 'Cantidad de Grupos', key: 'cg', width: 10 },
            { header: 'Año', key: 'anno', width: 10 },
            { header: 'Examen Final', key: 'exafinal', width: 10 },
            { header: 'Semestre', key: 'semestre', width: 10 },
            { header: 'Horas', key: 'horas', width: 10 },
            { header: 'Profesor', key: 'profesor', width: 10 },
            { header: 'Notas', key: 'notas', width: 10 },
            // Otros encabezados...
        ];
          let carreraN=carrera.nombre;
          let ca=0
          let cg=0
          let cef=0
          let horas=0
          
          let asignaturaFiltradaCarr=asignaturas.filter((asignatura)=>asignatura.carrera.equals(carrera._id))
          asignaturaFiltradaCarr.map(async (asignatura)=>{
            ca+=1;
            cg+=parseInt(asignatura.cantgrupos)
            if(asignatura.exafinal)
              cef+=1
            horas+=parseInt(asignatura.horas)
            let profesor=null
            if(asignatura.profesor)
                profesor=await Profesor.findById(asignatura.profesor)
            worksheet.addRow({asignatura:asignatura.nombre,
                tp:asignatura.tipocurso,
                cg:asignatura.cantgrupos,
                anno:asignatura.anno,
                exafinal:asignatura.exafinal?"Sí":"No",
                semestre:asignatura.semestre?"1ro":"2do",
                horas:asignatura.horas,
                profesor:asignatura.profesor?`${profesor.nombre} ${profesor.apellidos}`:"",
                notas:asignatura.notas})
          })
          //console.log('✅ aux    ', ca)
          
          worksheetGeneral.addRow({carrera:carreraN,ca:ca,cg:cg,cef:cef,horas:horas})
        })
    }
    
    
    // Obtener datos de la base de datos
    //const datos = await excelFacultyModel.find().exec();
//console.log(carrerasInicio);

    // Agregar filas
    

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
}