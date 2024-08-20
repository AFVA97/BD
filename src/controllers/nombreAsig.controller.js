import NombreAsignatura from "../models/nombreasignatura.model.js"


export const getNombreAsig = async (req, res) => {
    try {
      
        const NombreAsigs = await NombreAsignatura.findById( req.params.id );
        res.json(NombreAsigs);
      } catch (error) {
        return res.status(500).json([ error.message ]);
      }
};

export const getNombreAsigs = async (req, res) => {
    try {
        const NombreAsigs = await NombreAsignatura.find();        
        res.json(NombreAsigs);
      } catch (error) {
        return res.status(500).json([error.message ]);
      }
};

export const createNombreAsig =async(req,res)=>{
    try {
      
        const {nombre,
        }=req.body;
        
            const newNombreAsig=new NombreAsignatura({nombre});
            const NombreAsigSaved=await newNombreAsig.save()
            res.json({NombreAsigSaved})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteNombreAsig = async (req, res) => {
    try {
        const deletedNombreAsig = await NombreAsignatura.findByIdAndDelete(req.params.id);
        if (!deletedNombreAsig)
          return res.status(404).json({ message: "NombreAsig not found" });
    
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};


export const updateNombreAsig=async(req,res)=>{ 
  try{
    const {nombre}=req.body;
    
    const NombreAsigUpdated=await NombreAsignatura.findOneAndUpdate(
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