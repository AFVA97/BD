import excelAdminModel from "../models/excel-admin.model.js"
import excelFacultyModel from "../models/excel-faculty.model.js"
import excelProfesorModel from "../models/excel-profesor.model.js"
import  ExcelJS from 'exceljs';
import { getAsignaturas } from "./asignatura.controller.js";
import { getCarreras } from "./carrera.controller.js";
import Asignatura from "../models/asignatura.model.js";
import Carrera from "../models/carrera.model.js";
import Extension from '../models/extuniv.model.js'
import Posgrado from '../models/posgrado.model.js'
import Investigacion from '../models/invcient.model.js'
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
    const {globalData}=req.cookies

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
    if(globalData!=0){
        asignaturas=asignaturas.filter((asignatura)=>(new Date(asignatura.comienzo).getFullYear()==globalData))
    }
   
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
    const worksheetPregrado = workbook.addWorksheet('Pregrado');
    const worksheetPosgrado = workbook.addWorksheet('Posgrado');
    const worksheetInvestigacion = workbook.addWorksheet('Investigación Científica');
    const worksheetExtension = workbook.addWorksheet('Extensión Universitaria');
    const {globalData}=req.cookies

    const idProf=req.params._id
   // console.log(idFac);
    const asigna =await Asignatura.find({profesor:idProf}).populate(["carrera","facultad"])
    const posgrad = await Posgrado.find({profesor:idProf})
    const extension=await Extension.find({profesor:idProf})
    const investiga=await Investigacion.find({profesor:idProf})
    let asignaturas=asigna
    let posgrados=posgrad
    let extensiones=extension
    let investigaciones=investiga
    if(globalData!=0){
        asignaturas=asigna.filter((asignatura)=>(new Date(asignatura.comienzo).getFullYear()==globalData))
        posgrados=posgrad.filter((posgrado)=>((new Date(posgrado.fecha).getFullYear()==globalData&&parseInt(String((new Date(posgrado.fecha)).getMonth() + 1).padStart(2, '0'))>7)||(new Date(posgrado.fecha).getFullYear()==(parseInt(globalData)+1)&&parseInt(String((new Date(posgrado.fecha)).getMonth() + 1))<=7)))
        investigaciones=investiga.filter((investigacion)=>((new Date(investigacion.fecha).getFullYear()==globalData&&parseInt(String((new Date(investigacion.fecha)).getMonth() + 1).padStart(2, '0'))>7)||(new Date(investigacion.fecha).getFullYear()==(parseInt(globalData)+1)&&parseInt(String((new Date(investigacion.fecha)).getMonth() + 1))<=7)))
        extensiones=extension.filter((extension)=>((new Date(extension.fecha).getFullYear()==globalData&&parseInt(String((new Date(extension.fecha)).getMonth() + 1).padStart(2, '0'))>7)||(new Date(extension.fecha).getFullYear()==(parseInt(globalData)+1)&&parseInt(String((new Date(extension.fecha)).getMonth() + 1))<=7)))
    }
    //console.log(asignaturas);
    
    // Agregar encabezados
    
    worksheetPregrado.columns = [
        { header: 'Asignatura', key: 'asignatura', width: 30 },
        { header: 'Carrera', key: 'carrera', width: 10 },
        { header: 'Facultad', key: 'Facultad', width: 30 },
        { header: 'Año', key: 'anno', width: 10 },
        { header: 'Cant. Grupos', key: 'cantgrupos', width: 30 },
        { header: 'T. de Curso', key: 'tipocurso', width: 10 },
        { header: 'Frecuencia', key: 'frecuencia', width: 30 },
        { header: 'Semestre', key: 'semestre', width: 10 },
        { header: 'Examen Final', key: 'exafinal', width: 30 },
        { header: 'Tutoria A. A.', key: 'tutoriaaa', width: 10 },
        { header: 'Notas', key: 'notas', width: 30 },
    ];
    //if(Array.isArray(asignaturas)){
        asignaturas.map((asign)=>{
            worksheetPregrado.addRow({asignatura:asign.nombre,
                carrera:asign.carrera.nombre,
                facultad:asign.facultad.nombre,
                anno:asign.anno,
                cantgrupos:asign.cantgrupos,
                tipocurso:asign.tipocurso,
                frecuencia:asign.frecuencia,
                semestre:asign.semestre?"1ro":"2do",
                exafinal:asign.exafinal?"Sí":"No",
                tutoriaaa:asign.tutoriaaa,
                notas:asign.notas
            })
        })
   // }

    worksheetPosgrado.columns = [
        { header: 'Nombre', key: 'nombre', width: 30 },
        { header: 'Impartido', key: 'impartido', width: 10 },
        { header: 'Modalidad', key: 'modalidad', width: 10 },
        { header: 'Cant. Cuadros', key: 'cantcuadros', width: 10 },
        { header: 'Horas', key: 'horas', width: 10 },
        { header: 'Fecha', key: 'fecha', width: 10 },
        { header: 'Ubicación', key: 'ubicacion', width: 10 },
    ];
    //if(Array.isArray(posgrados)){
        posgrados.map((posgr)=>{
            const fechaActual = new Date(posgr.fecha);
            const dia = String(fechaActual.getDate()).padStart(2, '0');
            const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
            const año = fechaActual.getFullYear();
            worksheetPosgrado.addRow({nombre:posgr.nombre,
                impartido:posgr.impartido?"Sí":"No",
                modalidad:posgr.modalidad,
                cantgrupos:posgr.cantcuadros,
                horas:posgr.horas,
                fecha:`${dia}/${mes}/${año}`,
                ubicacion:posgr.ubicacion
            })
        })
   // }

    worksheetInvestigacion.columns = [
        { header: 'Titulo', key: 'titulo', width: 30 },
        { header: 'Tipo de Investigación', key: 'tipo', width: 10 },
        { header: 'Fecha', key: 'fecha', width: 10 },
        { header: 'Descripción', key: 'descripcion', width: 10 },
        { header: 'Revista', key: 'revista', width: 30 },
        { header: 'Libro', key: 'libro', width: 10 },
        { header: 'Red Académica', key: 'red', width: 10 },
        { header: 'Alcance', key: 'alcance', width: 10 },
        { header: 'Grupo', key: 'grupo', width: 30 },
        { header: 'Programa', key: 'programa', width: 10 },
        { header: 'Programa Asociado', key: 'programaasoc', width: 10 },
        { header: 'ISSN', key: 'issn', width: 10 },
        { header: 'ISBN', key: 'isbn', width: 30 },
        { header: 'Presencial', key: 'presencial', width: 10 },
        { header: 'Ponente', key: 'ponente', width: 10 },
        { header: 'Autores', key: 'autores', width: 10 },
        { header: 'Link', key: 'link', width: 10 },
    ];
  //  if(Array.isArray(investigaciones)){
        investigaciones.map((invest)=>{
            const fechaActual = new Date(invest.fecha);
            const dia = String(fechaActual.getDate()).padStart(2, '0');
            const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
            const año = fechaActual.getFullYear();
            switch (invest.tipo) {
                case "Proyecto":
                    worksheetInvestigacion.addRow({titulo:invest.titulo,
                        tipo:invest.tipo,
                        fecha:`${dia}/${mes}/${año}`,
                        descripcion:"---",
                        revista:"---",
                        libro:"---",
                        red:"---",
                        alcance:invest.alcance,
                        grupo:"---",
                        programa:invest.descripcion,
                        programaasoc:invest.issbnn,
                        issn:"---",
                        isbn:"---",
                        presencial:"---",
                        ponente:"---",
                        autores:"---",
                        link:"---"
                    })
                    break;         
                case "Publicación Artículo":
                    worksheetInvestigacion.addRow({titulo:invest.titulo,
                        tipo:invest.tipo,
                        fecha:`${dia}/${mes}/${año}`,
                        descripcion:invest.descripcion,
                        revista:"---",
                        libro:"---",
                        red:"---",
                        alcance:"---",
                        grupo:invest.alcance,
                        programa:"---",
                        programaasoc:"---",
                        issn:invest.issbnn,
                        isbn:"---",
                        presencial:"---",
                        ponente:"---",
                        autores:invest.autores,
                        link:invest.link
                    })
                    break;   
                case "Publicación Libro o Capítulo":
                    worksheetInvestigacion.addRow({titulo:invest.titulo,
                        tipo:invest.tipo,
                        fecha:`${dia}/${mes}/${año}`,
                        descripcion:invest.descripcion,
                        revista:"---",
                        libro:"---",
                        red:"---",
                        alcance:"---",
                        grupo:"---",
                        programa:"---",
                        programaasoc:"---",
                        issn:"---",
                        isbn:invest.issbnn,
                        presencial:"---",
                        ponente:"---",
                        autores:"---",
                        link:invest.link
                    })
                    break;             
                case "Premio ACC":
                    worksheetInvestigacion.addRow({titulo:invest.titulo,
                        tipo:invest.tipo,
                        fecha:`${dia}/${mes}/${año}`,
                        descripcion:invest.descripcion,
                        revista:"---",
                        libro:"---",
                        red:"---",
                        alcance:"---",
                        grupo:"---",
                        programa:"---",
                        programaasoc:"---",
                        issn:"---",
                        isbn:"---",
                        presencial:"---",
                        ponente:"---",
                        autores:invest.autores,
                        link:"---"
                    })
                    break;     
                case "Premio BTJ":
                    worksheetInvestigacion.addRow({titulo:invest.titulo,
                        tipo:invest.tipo,
                        fecha:`${dia}/${mes}/${año}`,
                        descripcion:invest.descripcion,
                        revista:"---",
                        libro:"---",
                        red:"---",
                        alcance:"---",
                        grupo:"---",
                        programa:"---",
                        programaasoc:"---",
                        issn:"---",
                        isbn:"---",
                        presencial:"---",
                        ponente:"---",
                        autores:invest.autores,
                        link:"---"
                    })
                    break;  
                case "Otro Premio":
                    worksheetInvestigacion.addRow({titulo:invest.titulo,
                        tipo:invest.tipo,
                        fecha:`${dia}/${mes}/${año}`,
                        descripcion:invest.descripcion,
                        revista:"---",
                        libro:"---",
                        red:"---",
                        alcance:invest.alcance,
                        grupo:"---",
                        programa:"---",
                        programaasoc:"---",
                        issn:"---",
                        isbn:"---",
                        presencial:"---",
                        ponente:"---",
                        autores:"---",
                        link:"---"
                    })
                    break;          
                case "Red Académica":
                    worksheetInvestigacion.addRow({titulo:invest.titulo,
                        tipo:invest.tipo,
                        fecha:`${dia}/${mes}/${año}`,
                        descripcion:invest.descripcion,
                        revista:"---",
                        libro:"---",
                        red:"---",
                        alcance:"---",
                        grupo:"---",
                        programa:"---",
                        programaasoc:"---",
                        issn:"---",
                        isbn:"---",
                        presencial:"---",
                        ponente:"---",
                        autores:"---",
                        link:"---"
                    })
                    break;       
                case "Fórum":
                    worksheetInvestigacion.addRow({titulo:invest.titulo,
                        tipo:invest.tipo,
                        fecha:`${dia}/${mes}/${año}`,
                        descripcion:invest.descripcion,
                        revista:"---",
                        libro:"---",
                        red:"---",
                        alcance:invest.alcance,
                        grupo:"---",
                        programa:"---",
                        programaasoc:"---",
                        issn:"---",
                        isbn:"---",
                        presencial:"---",
                        ponente:"---",
                        autores:"---",
                        link:"---"
                    })
                    break;  
                case "Participación en Evento":
                    worksheetInvestigacion.addRow({titulo:invest.titulo,
                        tipo:invest.tipo,
                        fecha:`${dia}/${mes}/${año}`,
                        descripcion:invest.descripcion,
                        revista:"---",
                        libro:"---",
                        red:"---",
                        alcance:invest.alcance,
                        grupo:"---",
                        programa:"---",
                        programaasoc:"---",
                        issn:"---",
                        isbn:"---",
                        presencial:invest.issbnn?"Sí":"No",
                        ponente:invest.autores,
                        autores:"---",
                        link:"---"
                    })
                    break;  
                case "Otro":
                    worksheetInvestigacion.addRow({titulo:invest.titulo,
                        tipo:invest.tipo,
                        fecha:`${dia}/${mes}/${año}`,
                        descripcion:invest.descripcion,
                        revista:"---",
                        libro:"---",
                        red:"---",
                        alcance:"---",
                        grupo:"---",
                        programa:"---",
                        programaasoc:"---",
                        issn:"---",
                        isbn:"---",
                        presencial:"---",
                        ponente:"---",
                        autores:"---",
                        link:"---"
                    })
                    break; 
                default:
                    return ""
              }
              
        })
   // }

    worksheetExtension.columns = [
        { header: 'Titulo', key: 'titulo', width: 30 },
        { header: 'Tipo de Extensión', key: 'tipo', width: 10 },
        { header: 'Horas', key: 'horas', width: 10 },
        { header: 'Fecha', key: 'fecha', width: 10 },
    ];
   // if(Array.isArray(extensiones)){
        extensiones.map((exten)=>{
            const fechaActual = new Date(exten.fecha);
            const dia = String(fechaActual.getDate()).padStart(2, '0');
            const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
            const año = fechaActual.getFullYear();
            worksheetExtension.addRow({titulo:exten.titulo,
                tipo:exten.tipo,
                horas:exten.horas,
                fecha:`${dia}/${mes}/${año}`
            })
        })
   // }
   

    // Enviar el archivo Excel
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=datos.xlsx');

    await workbook.xlsx.write(res);
    res.end();
}