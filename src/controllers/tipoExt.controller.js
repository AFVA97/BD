import tipoExtUniv from "../models/tipoExt.model.js"



export const getTipoExtUniv = async (req, res) => {
  try {
    const tipoExtUniv = await tipoExtUniv.find();
    res.json(tipoExtUniv);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  };


export const createTipoExtUniv=async(req,res)=>{
  try {
    const {tipo}=req.body;
        const newTipoExtUniv=new tipoExtUniv({tipo});
        const tipoExtUnivSaved=await newTipoExtUniv.save()
        res.json({tipoExtUnivSaved})
} catch (error) {
    return res.status(500).json({ message: error.message });
}

    
}

export const deleteTipoExtUniv = async (req, res) => {
  try {
    const deletedtipoExtUniv = await tipoExtUniv.findByIdAndDelete(req.params.id);
    if (!deletedtipoExtUniv)
      return res.status(404).json({ message: "tipoExtUniv not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



