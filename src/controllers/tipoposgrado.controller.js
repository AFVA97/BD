import TipoPosgrado from "../models/tipoposgrado.model.js"


export const getTipoPosgrado = async (req, res) => {
  try {
    const tipoPosgrado = await TipoPosgrado.find();
    res.json(tipoPosgrado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  };
  export const getTipoPosgradoss = async (req, res) => {
    try {
      const tipoPosgrado = await TipoPosgrado.findById(req.params._id);
      res.json(tipoPosgrado);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
    };

export const createTipoPosgrado=async(req,res)=>{
  try {
    const {tipo}=req.body;
        const newTipoPosgrado=new TipoPosgrado({tipo});
        const tipoPosgradoSaved=await newTipoPosgrado.save()
        res.json({tipoPosgradoSaved})
} catch (error) {
    return res.status(500).json({ message: error.message });
}

    
}

export const deleteTipoPosgrado = async (req, res) => {
  try {
    const deletedtipoPosgrado = await TipoPosgrado.findByIdAndDelete(req.params.id);
    if (!deletedtipoPosgrado)
      return res.status(404).json({ message: "tipoPosgrado not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};





