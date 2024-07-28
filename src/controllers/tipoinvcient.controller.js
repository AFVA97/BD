import TipoInvCient from "../models/tipoinvcient.model.js"


export const getTipoInvCient = async (req, res) => {
  try {
    const tipoInvCient = await TipoInvCient.find();
    res.json(tipoInvCient);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  };


export const createTipoInvCient=async(req,res)=>{
  try {
    const {tipo}=req.body;
        const newTipoInvCient=new TipoInvCient({tipo});
        const tipoInvCientSaved=await newTipoInvCient.save()
        res.json({tipoInvCientSaved})
} catch (error) {
    return res.status(500).json({ message: error.message });
}

    
}

export const deleteTipoInvCient = async (req, res) => {
  try {
    const deletedtipoInvCient = await TipoInvCient.findByIdAndDelete(req.params.id);
    if (!deletedtipoInvCient)
      return res.status(404).json({ message: "tipoInvCient not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};





