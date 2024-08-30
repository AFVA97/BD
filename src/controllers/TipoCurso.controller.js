import TipoCurso from "../models/tipocurso.model.js"


export const getTipoCurso = async (req, res) => {
    try {
      
        const NombreAsigs = await TipoCurso.findById( req.params.id );
        res.json(NombreAsigs);
      } catch (error) {
        return res.status(500).json([ error.message ]);
      }
};

export const getTipoCursos = async (req, res) => {
    try {
        const NombreAsigs = await TipoCurso.find();        
        res.json(NombreAsigs);
      } catch (error) {
        return res.status(500).json([error.message ]);
      }
};

export const createTipoCurso =async(req,res)=>{
    try {
      
        const {nombre,
        }=req.body;
        
            const newNombreAsig=new TipoCurso({nombre});
            const NombreAsigSaved=await newNombreAsig.save()
            res.json({NombreAsigSaved})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteTipoCurso = async (req, res) => {
    try {
      
        const deletedNombreAsig = await TipoCurso.findByIdAndDelete(req.params._id);
        if (!deletedNombreAsig)
          return res.status(404).json({ message: "NombreAsig not found" });
    
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};


export const updateTipoCurso=async(req,res)=>{ 
  try{
    const {nombre}=req.body;
    
    const NombreAsigUpdated=await TipoCurso.findOneAndUpdate(
      { _id: req.params._id },       
       {nombre} ,
      { new: true }
    );
    return res.json(NombreAsigUpdated);
  }

 catch (error) {
  return res.status(500).json(error.message );
}
};