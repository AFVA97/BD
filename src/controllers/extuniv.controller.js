import ExtUniv from "../models/extuniv.model.js"


export const getExtUnivs = async (req, res) => {
    try {
      const ExtUnivs = await ExtUniv.find();

      const {globalData}=req.cookies
      if(globalData==0){
        res.json(ExtUnivs)
        return
      }
      else{
        const filtrado=ExtUnivs.filter((extension)=>((new Date(extension.fecha).getFullYear()==globalData&&parseInt(String((new Date(extension.fecha)).getMonth() + 1).padStart(2, '0'))>7)||(new Date(extension.fecha).getFullYear()==(parseInt(globalData)+1)&&parseInt(String((new Date(extension.fecha)).getMonth() + 1))<=7)))
        res.json(filtrado);
        return
      }
      //res.json(ExtUnivs);
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
        const {profesor,
            fecha,
            titulo,
            horas,
            tipo}=req.body;
            const newExtUniv=new ExtUniv({
                profesor,
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
    const { profesor=req.user.id,
        nombre,
        fecha,
        titulo,
        horas,
        tipo } = req.body;
        console.log(fecha);
        
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
    const extUniv = await ExtUniv.findById(req.params.id);
    if (!extUniv) return res.status(404).json({ message: "ExtUniv not found" });
    return res.json(extUniv);
  } catch (error) {
    return res.status(500).json([error.message ]);
  }
};



