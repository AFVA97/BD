import ExtUniv from "../models/extuniv.model.js"


export const getExtUnivs = async (req, res) => {
    try {
      const ExtUnivs = await ExtUniv.find({ profesor : req.user.id });
      res.json(ExtUnivs);
    } catch (error) {
      return res.status(500).json([error.message ]);
    }
  };
  export const getExtUnivProfesor = async (req, res) => {
    try {
      const ExtUnivs = await ExtUniv.find({ profesor : req.params.idProfesor });
      res.json(ExtUnivs);
    } catch (error) {
      return res.status(500).json([error.message ]);
    }
  };

export const createExtUniv=async(req,res)=>{
    try {
        const {profesor=req.user.id,
            nombre,
            fecha,
            titulo,
            horas,
            tipo=req.params.tipo}=req.body;
            const newExtUniv=new ExtUniv({
                profesor,
                nombre,
                fecha,
                titulo,
                horas,
                tipo});
            const ExtUnivSaved=await newExtUniv.save()
            res.json({ExtUnivSaved})
    } catch (error) {
        return res.status(500).json([error.message ]);
    }
    
}

export const deleteExtUniv = async (req, res) => {
  try {
    const deletedExtUniv = await ExtUniv.findByIdAndDelete(req.params.id);
    if (!deletedExtUniv)
      return res.status(404).json(["ExtUniv not found" ]);

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json([error.message ]);
  }
};

export const updateExtUniv = async (req, res) => {
  try {
    const { profesor,
        nombre,
        fecha,
        titulo,
        horas,
        tipo } = req.body;
    const ExtUnivUpdated = await ExtUniv.findOneAndUpdate(
      { _id: req.params.id },
      { profesor,
        nombre,
        fecha,
        titulo,
        horas,
        tipo },
      { new: true }
    );
    return res.json(ExtUnivUpdated);
  } catch (error) {
    return res.status(500).json([error.message ]);
  }
};

export const getExtUniv = async (req, res) => {
  try {
    const ExtUniv = await ExtUniv.findById(req.params.id);
    if (!ExtUniv) return res.status(404).json({ message: "ExtUniv not found" });
    return res.json(ExtUniv);
  } catch (error) {
    return res.status(500).json([error.message ]);
  }
};



