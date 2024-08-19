import Asignatura from "../models/asignatura.model.js"


export const getAsignaturas = async (req, res) => {
    try {
      const asignaturas = await Asignatura.find({ facultad : req.user.id });
      res.json(asignaturas);
    } catch (error) {
      return res.status(500).json([error.message ]);
    }
  };


export const createAsignatura=async(req,res)=>{
    try {
        const {nombre,
            carrera=req.params.carrera,
            facultad=req.user.id,
            anno,
            semestre,
            tipocurso,
            cantgrupos,
            horas,
            profesor,
            notas}=req.body;
            const newAsignatura=new Asignatura({nombre,
                carrera,
                facultad,
                anno,
                semestre,
                tipocurso,
                cantgrupos,
                horas,
                profesor,
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
      tipocurso,
      cantgrupos,
      horas,
      profesor,
      notas } = req.body;
    const AsignaturaUpdated = await Asignatura.findOneAndUpdate(
      { _id: req.params.id },
      { nombre,
        carrera,
        facultad,
        anno,
        semestre,
        tipocurso,
        cantgrupos,
        horas,
        profesor,
        notas },
      { new: true }
    );
    return res.json(AsignaturaUpdated);
  } catch (error) {
    return res.status(500).json([error.message ]);
  }
};

export const getAsignatura = async (req, res) => {
  try {
    const Asignatura = await Asignatura.findById(req.params.id);
    if (!Asignatura) return res.status(404).json(["Asignatura not found"]);
    return res.json(Asignatura);
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

