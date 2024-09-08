import Curso from "../models/curso.model.js"


export const getCursos = async (req, res) => {
    try {
      const Cursos = await Curso.find();
      
        res.json(Cursos)
        return
      
    } catch (error) {
      return res.status(500).json([error.message ]);
    }
  };


export const createCurso=async(req,res)=>{
    try {
        const {comienzo, finaliza, }=req.body;
        const nombre=`${(new Date(comienzo)).getFullYear()}-${(new Date(finaliza)).getFullYear()}`
            const newCurso=new Curso({nombre, comienzo, finaliza});
            const Cursosaved=await newCurso.save()
            res.json({Cursosaved})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

export const deleteCurso = async (req, res) => {
  try {
    const deletedCurso = await Curso.findByIdAndDelete(req.params.id);
    if (!deletedCurso)
      return res.status(404).json(["Curso not found" ]);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json([error.message ]);
  }
};



