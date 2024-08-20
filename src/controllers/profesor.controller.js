import Profesor from "../models/profesor.model.js"


export const getProfesor = async (req, res) => {
    try {
        const Profesors = await Profesor.findById( req.params._id );
        
        res.json(Profesors);
      } catch (error) {
        return res.status(500).json([error.message ]);
      }
};

export const getProfesors = async (req, res) => {
    try {
        const Profesors = await Profesor.find();
        
        res.json(Profesors);
      } catch (error) {
        return res.status(500).json([error.message ]);
      }
};

export const createProfesor =async(req,res)=>{
    try {
        const {idUniversidad,
        correo,
        ci,
        nombre,
        apellidos,
        graduado,
        plazaFija,
        funcionDireccion,
        pagoHoras,
        trabajoec,
        trabajoc,
        trabajod,
        tutoria,
        examene,
        trabajometo
        }=req.body;
            const newProfesor=new Profesor({idUniversidad,
                correo,
                ci,
                nombre,
                apellidos,
                graduado,
                plazaFija,
                funcionDireccion,
                pagoHoras,
                trabajoec,
                trabajoc,
                trabajod,
                tutoria,
                examene,
                trabajometo});
            const ProfesorSaved=await newProfesor.save()
            res.json({ProfesorSaved})
    } catch (error) {
        return res.status(500).json([error.message]);
    }
}

export const deleteProfesor = async (req, res) => {
    try {
        const deletedProfesor = await Profesor.findByIdAndDelete(req.params._id);
        if (!deletedProfesor)
          return res.status(404).json([ "Profesor not found" ]);
    
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json([error.message]);
      }
};

export const updateProfesor = async (req, res) => {
    try {
      const { idUniversidad,
        correo,
        ci,
        nombre,
        apellidos,
        graduado,
        plazaFija,
        funcionDireccion,
        pagoHoras ,
        trabajoec,
        trabajoc,
        trabajod,
        tutoria,
        examene,
        trabajometo} = req.body;
        
      const ProfesorUpdated = await Profesor.findOneAndUpdate(
        { _id: req.params._id },
        { idUniversidad,
            correo,
            ci,
            nombre,
            apellidos,
            graduado,
            plazaFija,
            funcionDireccion,
            pagoHoras ,
            trabajoec,
            trabajoc,
            trabajod,
            tutoria,
            examene,
            trabajometo},
        { new: true }
      );
      return res.json(ProfesorUpdated);
    } catch (error) {
      return res.status(500).json([error.message ]);
    }
  };


