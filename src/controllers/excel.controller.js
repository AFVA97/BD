import excelAdminModel from "../models/excel-admin.model.js"
import  ExcelJS from 'exceljs';
import Asignatura from "../models/asignatura.model.js";
import Carrera from "../models/carrera.model.js";
import Extension from '../models/extuniv.model.js'
import Posgrado from '../models/posgrado.model.js'
import Investigacion from '../models/invcient.model.js'


export const getExcelAdmin=async (req, res) => {
    const {globalData}=req.cookies
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Datos');
//////
//////
//////LOS MODELOS PIENSO NO USARLOS
//////
//////
    // Agregar encabezados
 // Estilos comunes
const headerStyle = {
    font: { bold: true, size: 16 },
    alignment: { vertical: 'middle', horizontal: 'center' },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFE0B2' } },
    border: {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    }
    
  };
  const cellStyle = {
    font: {  size: 12 },
    alignment: { vertical: 'middle', horizontal: 'center' },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFE0B2' } },
    border: {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    }
  };
  
  // 
  //#region Encabezados principales
  worksheet.mergeCells('H1:W1');
  worksheet.getCell('H1').value = 'DOCENCIA PREGRADO';
  worksheet.getCell('H1').style = headerStyle;
  
  worksheet.mergeCells('X1:AK1');
  worksheet.getCell('X1').value = 'DOCENCIA DE POSTGRADO E INVESTIGACIÓN';
  worksheet.getCell('X1').style = headerStyle;
  
  worksheet.mergeCells('AL1:AO1');
  worksheet.getCell('AL1').value = 'EXTENSION UNIVERSITARIA';
  worksheet.getCell('AL1').style = headerStyle;
  worksheet.mergeCells('AP1:AS1');
  worksheet.getCell('AP1').value = 'TOTALES';
  worksheet.getCell('AP1').style = headerStyle;
  worksheet.getRow(1).height=`30`
  
  worksheet.mergeCells('A3:A4')
  worksheet.getCell('A3').value='ID Universidad'
  worksheet.mergeCells('B3:B4')
  worksheet.getCell('B3').value='Área'
  worksheet.mergeCells('C3:C4')
  worksheet.getCell('C3').value='Departamento/Dirección'
  worksheet.mergeCells('D3:D4')
  worksheet.getCell('D3').value='Nombre(s)'
  worksheet.mergeCells('E3:E4')
  worksheet.getCell('E3').value='Apellidos'
  worksheet.mergeCells('F3:F4')
  worksheet.getCell('F3').value='Graduado de'
  worksheet.mergeCells('G3:G4')
  worksheet.getCell('G3').value='Funciones de direccion. (Cuadro, PPAA, Jefes de Disciplina, otras.)'
  worksheet.mergeCells('H3:I3')
  worksheet.getCell('H3').value='Carreras en las que imparte Docencia'
  worksheet.getCell('H4').value='1er Semestre'
  worksheet.getCell('I4').value='2do Semestre'
  worksheet.mergeCells('J3:K3')
  worksheet.getCell('J3').value='Años'
  worksheet.getCell('J4').value='1er Semestre'
  worksheet.getCell('K4').value='2do Semestre'
  worksheet.mergeCells('L3:M3')
  worksheet.getCell('L3').value='Asignaturas que Imparte'
  worksheet.getCell('L4').value='1er Semestre'
  worksheet.getCell('M4').value='2do Semestre'
  worksheet.mergeCells('N3:O3')
  worksheet.getCell('N3').value='Total de Horas en el Semestre'
  worksheet.getCell('N4').value='1er Semestre'
  worksheet.getCell('O4').value='2do Semestre'
  worksheet.mergeCells('P3:Q3')
  worksheet.getCell('P3').value='Frecuencia Semanal'
  worksheet.getCell('P4').value='1er Semestre'
  worksheet.getCell('Q4').value='2do Semestre'
  worksheet.mergeCells('R3:T3')
  worksheet.getCell('R3').value='Tutoría de Trabajo Científico Estudiantil'
  worksheet.getCell('R4').value='Trabajo Extracurricular'
  worksheet.getCell('S4').value='Trabajo de Curso'
  worksheet.getCell('T4').value='Trabajo de Diploma'
  worksheet.mergeCells('U3:U4')
  worksheet.getCell('U3').value='Tutoria de Alumnos Ayudantes y/o de Adiestrados'
  worksheet.mergeCells('V3:V4')
  worksheet.getCell('V3').value='Horas para trabajo Metodológico'
  worksheet.mergeCells('W3:W4')
  worksheet.getCell('W3').value='Total de horas de pregrado'
  worksheet.mergeCells('X3:X4')
  worksheet.getCell('X3').value='Publicaciones cientificas según grupo (Del I al IV)'
  worksheet.mergeCells('Y3:Y4')
  worksheet.getCell('Y3').value='Presentación de trabajos en el fórum de ciencia y técnica'
  worksheet.mergeCells('Z3:Z4')
  worksheet.getCell('Z3').value='Presentación de propuestas de premios ACC e innovación'
  worksheet.mergeCells('AA3:AA4')
  worksheet.getCell('AA3').value='Presentación de propuestas de premios de las BTJ (solo para menores de 35 e incluye sello y exposición)'
  worksheet.mergeCells('AB3:AB4')
  worksheet.getCell('AB3').value='Presentación de premios internacionales'
  worksheet.mergeCells('AC3:AC4')
  worksheet.getCell('AC3').value='Presentación de trabajos a premios nacionales '
  worksheet.mergeCells('AD3:AD4')
  worksheet.getCell('AD3').value='Presentación de trabajos en eventos científicos'
  worksheet.mergeCells('AE3:AJ3')
  worksheet.getCell('AE3').value='Modalidad de Posgrado'
  worksheet.getCell('AE4').value='Curso'
  worksheet.getCell('AF4').value='Diplomado'
  worksheet.getCell('AG4').value='Especialidad'
  worksheet.getCell('AH4').value='Entrenamientos'
  worksheet.getCell('AI4').value='Maestrias'
  worksheet.getCell('AJ4').value='Doctorados'
  worksheet.mergeCells('AK3:AK4')
  worksheet.getCell('AK3').value='Total de horas de postgrado'
  worksheet.mergeCells('AL3:AL4')
  worksheet.getCell('AL3').value='Tiempo dedicado a la atención a la Residencia Estudiantil'
  worksheet.mergeCells('AM3:AM4')
  worksheet.getCell('AM3').value='Tiempo dedicado al trabajo con las catedras Honorificas'  
  worksheet.mergeCells('AN3:AN4')
  worksheet.getCell('AN3').value='Tiempo dedicado a actividades extensionistas'
  worksheet.mergeCells('AO3:AO4')
  worksheet.getCell('AO3').value='Total de horas de Extensión Universitaria'
  worksheet.mergeCells('AP3:AP4')
  worksheet.getCell('AP3').value='Total de horas semanales'
  worksheet.mergeCells('AQ3:AQ4')
  worksheet.getCell('AQ3').value='Total de horas Primer semestre'
  worksheet.mergeCells('AR3:AR4')
  worksheet.getCell('AR3').value='Total de horas segundo semestre'
  worksheet.mergeCells('AS3:AS4')
  worksheet.getCell('AS3').value='Total de horas General en el año'
  
  for (let row = 3; row <= 4; row++) {
    for (let col = 1; col <= 45; col++) { // BR es la columna 70
      const cell = worksheet.getCell(row, col);
      cell.style = cellStyle;
    }
  }
  worksheet.columns.forEach(column => {
    let maxLength = 0;
    column.eachCell({ includeEmpty: true }, cell => {
      const cellValue = cell.value ? cell.value.toString() : '';
      maxLength = Math.max(maxLength, cellValue.length);
    });
    column.width = maxLength; // Añadir un poco de espacio extra
  });
  //#endregion

  const asigna = await Asignatura.find().populate("profesor");
   
    const carreras=await Carrera.find();

    let asignaturas=asigna
    if(globalData!=0){
        asignaturas=asigna.filter((asignatura)=>(new Date(asignatura.comienzo).getFullYear()==globalData))
    }
  

  //worksheet.addRow()
    
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

   
    worksheetGeneral.columns = [
        { header: 'Carrera', key: 'carrera', width: 30 },
        { header: 'Cantidad de Asignturas', key: 'ca', width: 10 },
        { header: 'Cantidad de Grupos', key: 'cg', width: 10 },
        { header: 'Cantidad de Examense Finales', key: 'cef', width: 10 },
        { header: 'Total de Horas', key: 'horas', width: 10 },
    ];
    const idFac=req.params._id
    
    const asigna = await Asignatura.find({facultad:idFac}).populate("profesor");
   
    const carreras=await Carrera.find({facultad:idFac});

    let asignaturas=asigna
    if(globalData!=0){
        asignaturas=asigna.filter((asignatura)=>(new Date(asignatura.comienzo).getFullYear()==globalData))
    }
     
    if(carreras.length>0){
        carreras.map((carrera)=>{
            const worksheet=workbook.addWorksheet(carrera.nombre.slice(0,31))
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
            ];
            let carreraN=carrera.nombre;
            let ca=0
            let cg=0
            let cef=0
            let horas=0
            
            let asignaturaFiltradaCarr=asignaturas.filter((asignatura)=>asignatura.carrera.equals(carrera._id))
            asignaturaFiltradaCarr.map( (asignatura)=>{
                ca+=1;
                cg+=parseInt(asignatura.cantgrupos)
                if(asignatura.exafinal)
                cef+=1
                horas+=parseInt(asignatura.horas)
                
                worksheet.addRow({asignatura:asignatura.nombre,
                    tp:asignatura.tipocurso,
                    cg:asignatura.cantgrupos,
                    anno:asignatura.anno,
                    exafinal:asignatura.exafinal?"Sí":"No",
                    semestre:asignatura.semestre?"1ro":"2do",
                    horas:asignatura.horas,
                    profesor:asignatura.profesor?`${asignatura.profesor.nombre} ${asignatura.profesor.apellidos}`:"",
                    notas:asignatura.notas})
            })
            worksheetGeneral.addRow({carrera:carreraN,ca:ca,cg:cg,cef:cef,horas:horas})
        })
    }
    
    
   
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
 

    worksheetPosgrado.columns = [
        { header: 'Nombre', key: 'nombre', width: 30 },
        { header: 'Impartido', key: 'impartido', width: 10 },
        { header: 'Modalidad', key: 'modalidad', width: 10 },
        { header: 'Cant. Cuadros', key: 'cantcuadros', width: 10 },
        { header: 'Horas', key: 'horas', width: 10 },
        { header: 'Fecha', key: 'fecha', width: 10 },
        { header: 'Ubicación', key: 'ubicacion', width: 10 },
    ];
   
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
   

    worksheetExtension.columns = [
        { header: 'Titulo', key: 'titulo', width: 30 },
        { header: 'Tipo de Extensión', key: 'tipo', width: 10 },
        { header: 'Horas', key: 'horas', width: 10 },
        { header: 'Fecha', key: 'fecha', width: 10 },
    ];
  
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
   
   

   
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=datos.xlsx');

    await workbook.xlsx.write(res);
    res.end();
}