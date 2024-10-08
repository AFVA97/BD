import InvCient from "../models/invcient.model.js"


export const getInvCients = async (req, res) => {
    try {
      const invCients = await InvCient.find();
      
      
      const {globalData,globalData1}=req.cookies
      if(globalData==0){
        res.json(invCients)
        //console.log('entrados')
        return
      }
      else{
        const filtrado=invCients.filter((investigacion)=>(investigacion.fecha>=(new Date(globalData)) && investigacion.fecha<=(new Date(globalData1))))
        res.json(filtrado);
        return
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


export const createInvCient=async(req,res)=>{
    try {
        const {profesor=req.user.id,
        titulo,
        fecha,
        descripcion,
        alcance,
        issbnn,
        autores,
        link,
        tipo}=req.body;
            const newInvCient=new InvCient({profesor,
                titulo,
                fecha,
                descripcion,
                alcance,
                issbnn,
                autores,
                link,
                tipo});
            const InvCientSaved=await newInvCient.save()
            res.json({InvCientSaved})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

export const deleteInvCient = async (req, res) => {
  try {
    const deletedInvCient = await InvCient.findByIdAndDelete(req.params.id);
    if (!deletedInvCient)
      return res.status(404).json(["InvCient not found" ]);

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateInvCient = async (req, res) => {
  try {
    const { titulo,
      fecha,
      descripcion,
      alcance,
      issbnn,
      autores,
      link,
      tipo } = req.body;
    const InvCientUpdated = await InvCient.findOneAndUpdate(
      { _id: req.params.id },
      { titulo,
        fecha,
        descripcion,
        alcance,
        issbnn,
        autores,
        link,
        tipo },
      { new: true }
    );
    return res.json(InvCientUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getInvCient = async (req, res) => {
  try {
    const invCient = await InvCient.findById(req.params._id);
    if (!invCient) return res.status(404).json([ "InvCient not found" ]);
    return res.json(invCient);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getInvCientProfesor = async (req, res) => {
  try {
    const invCient = await InvCient.find({profesor:req.params.idProfesor});
    if (!invCient) return res.status(404).json(["InvCient not found" ]);
    return res.json(invCient);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

