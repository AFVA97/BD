import Asignatura from "../models/asignatura.model.js"


export const getAsignaturas = async (req, res) => {
    try {
      const asignaturas = await Asignatura.find();
      const {globalData}=req.cookies
      //console.log(globalData);
      
      if(globalData==0){
        res.json(asignaturas)
        return
      }
      else{       
        
        const filtrado=asignaturas.filter((asignatura)=>(new Date(asignatura.comienzo).getFullYear()==globalData))
        res.json(filtrado);
        return
      }
    } catch (error) {
      return res.status(500).json([error.message ]);
    }
  };


export const createAsignatura=async(req,res)=>{
    try {
        const {nombre,
            carrera,
            facultad,
            anno,
            semestre,
            tipocurso,
            cantgrupos,
            comienzo,
            finaliza,
            horas,
            tutoriaaa,
            profesor,
            frecuencia,
            exafinal,
            notas}=req.body;
            console.log(req.body);
            
            const newAsignatura=new Asignatura({nombre,
                carrera,
                facultad,
                anno,
                semestre,
                comienzo,
                finaliza,
                tipocurso,
                frecuencia,
                tutoriaaa,
                cantgrupos,
                horas,
                profesor,
                exafinal,
                notas});
            const asignaturaSaved=await newAsignatura.save()
            res.json({asignaturaSaved})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

export const deleteAsignatura = async (req, res) => {
  try {
    const deletedAsignatura = await Asignatura.findByIdAndDelete(req.params.id);
    if (!deletedAsignatura)
      return res.status(404).json(["Asignatura not found" ]);

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json([error.message ]);
  }
};

export const updateAsignatura = async (req, res) => {
  try {
    const { nombre,
      carrera,
      facultad,
      anno,
      semestre,
      comienzo,
      finaliza,
      tipocurso,
      cantgrupos,
      frecuencia,
      tutoriaaa,
      horas,
      profesor,
      exafinal,
      notas } = req.body;
    const AsignaturaUpdated = await Asignatura.findOneAndUpdate(
      { _id: req.params._id },
      { nombre,
        carrera,
        facultad,
        exafinal,
        anno,
        semestre,
        comienzo,
        finaliza,
        tipocurso,
        frecuencia,
        cantgrupos,
        tutoriaaa,
        horas,
        profesor,
        notas },
      { new: true }
    );
    return res.json(AsignaturaUpdated);
  } catch (error) {
    console.log(error);
    
    return res.status(500).json([error.message ]);
  }
};

export const getAsignatura = async (req, res) => {
  try {
    const asignatura = await Asignatura.findById(req.params.id).populate(['facultad','carrera']);
    if (!asignatura) return res.status(404).json(["Asignatura not found"]);
    return res.json(asignatura);
  } catch (error) {
    return res.status(500).json([error.message ]);
  }
};
export const getAsignaturaProf = async (req, res) => {
  try {
    const asignatura = await Asignatura.find({profeosr:req.params.id});
    if (!asignatura) return res.status(404).json(["Asignatura not found"]);
    return res.json(asignatura);
  } catch (error) {
    return res.status(500).json([error.message ]);
  }
};
export const getAsignaturaFac = async (req, res) => {
  try {
    const asignatura = await Asignatura.find({facultad:req.params._id});
    if (!asignatura) return res.status(404).json(["Asignatura not found"]);
    return res.json(asignatura);
  } catch (error) {
    return res.status(500).json([error.message ]);
  }
};

