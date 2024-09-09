import  ExcelJS from 'exceljs';
import Asignatura from "../models/asignatura.model.js";
import Carrera from "../models/carrera.model.js";
import Extension from '../models/extuniv.model.js'
import Posgrado from '../models/posgrado.model.js'
import Profesor from '../models/profesor.model.js'
import Investigacion from '../models/invcient.model.js'


export const getExcelAdmin=async (req, res) => {
    const {globalData,globalData1}=req.cookies
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
//   worksheet.mergeCells('AP1:AS1');
//   worksheet.getCell('AP1').value = 'TOTALES';
//   worksheet.getCell('AP1').style = headerStyle;
//   worksheet.getRow(1).height=`30`
  
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
  worksheet.getCell('AP3').value='Total de horas General en el año'
  
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


  const asigna = await Asignatura.find().populate(["facultad","carrera"]);   
  const posgrad = await Posgrado.find()
  const extension=await Extension.find()
  const investiga=await Investigacion.find()
  let asignaturas=asigna
  let posgrados=posgrad
  let extensiones=extension
  let investigaciones=investiga
  if(globalData!=0){
      asignaturas=asigna.filter((asignatura)=>(asignatura.comienzo>=(new Date(globalData)) && asignatura.finaliza<=(new Date(globalData1))))
      posgrados=posgrad.filter((posgrado)=>(posgrado.fecha>=(new Date(globalData)) && posgrado.fecha<=(new Date(globalData1))))
      investigaciones=investiga.filter((investigacion)=>(investigacion.fecha>=(new Date(globalData)) && investigacion.fecha<=(new Date(globalData1))))
      extensiones=extension.filter((extension)=>(extension.fecha>=(new Date(globalData)) && extension.fecha<=(new Date(globalData1))))
  }
    const profesores=await Profesor.find();
    
    
    
    
  profesores.map((profesor)=>{
    let asignatura=asignaturas.filter((asign)=>profesor._id.equals(asign.profesor))
    let posgrado=posgrados.filter((posgr)=>profesor._id.equals(posgr.profesor))
    let extensi=extensiones.filter((exten)=>profesor._id.equals(exten.profesor))
    let investigacion=investigaciones.filter((invest)=>profesor._id.equals(invest.profesor))
    
    
    const row=[]
    
    row.push(profesor.idUniversidad)
    row.push("Rectoría")
    row.push("Marxismo- Leninismo")
    row.push(profesor.nombre)
    row.push(profesor.apellidos)
    row.push(profesor.graduado)
    row.push(profesor.funcionDireccion)
    let carr1=""
    let carr2=""
    let annos1=""
    let annos2=""
    let asignatura1=""
    let asignatura2=""
    let horas1=0
    let horas2=0
    let frecuencia1=0
    let frecuencia2=0
    let tutoriaaa=0
    asignatura.map((asign)=>{
        if(asign.semestre){
            //console.log('1ro');
            
            carr1+=`${asign.carrera.nombre}, `
            annos1+=`${asign.anno}, `
            asignatura1+=`${asign.nombre}, `
            horas1+=parseInt(asign.horas)
            frecuencia1+=parseInt(asign.frecuencia)
        }
        else{
            //console.log('2do');
            
            carr2+=`${asign.carrera.nombre}, `
            annos2+=`${asign.anno}, `
            asignatura2+=`${asign.nombre}, `
            horas2+=parseInt(asign.horas)
            frecuencia2+=parseInt(asign.frecuencia)
        }
        tutoriaaa+=asign.tutoriaaa
    })
    //console.log(frecuencia2);
    
    row.push(carr1)
    row.push(carr2)
    row.push(annos1)
    row.push(annos2)
    row.push(asignatura1)
    row.push(asignatura2)
    row.push(horas1)
    row.push(horas2)
    row.push(frecuencia1)
    row.push(frecuencia2)
    row.push(profesor.trabajoec)
    row.push(profesor.trabajoc)
    row.push(profesor.trabajod)
    row.push(tutoriaaa)
    row.push(profesor.trabajometo)
    row.push(parseInt(horas1)+parseInt(horas2)+parseInt(profesor.trabajoec)+parseInt(profesor.trabajoc)+parseInt(profesor.trabajod)+parseInt(profesor.trabajometo))

    let publicaciones=0
    let forum=0
    let acc=0
    let btj=0
    let premiosi=0
    let premios=0
    let otros=0
    investigacion.map((invest)=>{{
        
        switch (invest.tipo) {
            case "Publicación Artículo":
                publicaciones+=1
                break;
            case "Fórum":
                forum+=1
                break;
            case "Premio ACC":
                
                acc+=1
                break;
            case "Premio BTJ":
                btj+=1
                break;
            case "Otro Premio":
                if(investigacion.alcance=='Internacional')
                    premiosi+=1
                else
                    premios+=1
                break;
            default:
                //console.log('entro otros');
                
                otros+=1
                break;
        }
    }})
    row.push(publicaciones)
    row.push(forum)
    row.push(acc)
    row.push(btj)
    row.push(premiosi)
    row.push(premios)
    row.push(otros)

    let curso=0
    let diplomado=0
    let especialidad=0
    let entrena=0
    let maestria=0
    let doctorado=0
    posgrado.map((posg)=>{
        
        switch (posg.modalidad) {
            case "Curso":
                curso+=posg.horas
                break;
            case "Diplomado":
                diplomado+=posg.horas
                break;
            case "Especialidad":
                especialidad+=posg.horas
                break;
            case "Entrenamiento":
                entrena+=posg.horas
                break;
            case "Maestría":
                maestria+=posg.horas
                break;
            default:
                doctorado+=posg.horas
                break;
        }
    })
    row.push(curso)
    row.push(diplomado)
    row.push(especialidad)
    row.push(entrena)
    row.push(maestria)
    row.push(doctorado)
    row.push(parseInt(curso)+parseInt(diplomado)+parseInt(especialidad)+parseInt(entrena)+parseInt(maestria)+parseInt(doctorado))
    
    let catedra=0
    let actividades=0
    let Residencia=0
    
    extensi.map((extss)=>{
        switch (extss.tipo) {
            case "Atención a la Residencia":
                Residencia+=parseInt(extss.horas)
                break;
            case "Trabajo Cátedras Honoríficas":
                catedra+=parseInt(extss.horas)
                break;
            default:
                actividades+=parseInt(extss.horas)
                break;
        }
    })
    row.push(Residencia)
    row.push(catedra)
    row.push(actividades)    
    row.push(parseInt(Residencia)+parseInt(catedra)+parseInt(actividades))  

    row.push(parseInt(Residencia)+parseInt(catedra)+parseInt(actividades)+parseInt(curso)+parseInt(diplomado)+parseInt(especialidad)+parseInt(entrena)+parseInt(maestria)+parseInt(doctorado)+parseInt(horas1)+parseInt(horas2)+parseInt(profesor.trabajoec)+parseInt(profesor.trabajoc)+parseInt(profesor.trabajod)+parseInt(profesor.trabajometo));
    
    //row.push(totales)
    worksheet.addRow(row)
  })

  
    
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