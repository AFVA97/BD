import Posgrado from "../models/posgrado.model.js"



export const getPosgrados = async (req, res) => {
    try {
      const Posgrados = await Posgrado.find();
      const {globalData,globalData1}=req.cookies
      if(globalData==0){
          res.json(Posgrados)
        return
      }
      else{
        const filtrado=Posgrados.filter((posgrado)=>(posgrado.fecha>=(new Date(globalData)) && posgrado.fecha<=(new Date(globalData1))))
        res.json(filtrado);
        return
      }
      //res.json(Posgrados);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  export const getPosgradoProfesor = async (req, res) => {
    try {
      const Posgrados = await Posgrado.find({ profesor : req.params.idProfesor });
      res.json(Posgrados);
    } catch (error) {
      return res.status(500).json(error.message );
    }
  };

export const createPosgrado=async(req,res)=>{
    try {
        const {profesor=req.user.id,
            nombre,
            fecha,
            impartido,
            cantcuadros,
            ubicacion,
            horas,
            modalidad=req.params.tipo}=req.body;
            const newPosgrado=new Posgrado({
                profesor,
                nombre,
                fecha,
                impartido,
                cantcuadros,
                ubicacion,
                horas,
                modalidad});
            const PosgradoSaved=await newPosgrado.save()
            res.json({PosgradoSaved})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

export const deletePosgrado = async (req, res) => {
  try {
    const deletedPosgrado = await Posgrado.findByIdAndDelete(req.params.id);
    if (!deletedPosgrado)
      return res.status(404).json({ message: "Posgrado not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePosgrado = async (req, res) => {
  try {
    const { profesor,
        nombre,
        fecha,
        impartido,
        cantcuadros,
        ubicacion,
        modalidad } = req.body;
    const PosgradoUpdated = await Posgrado.findOneAndUpdate(
      { _id: req.params.id },
      { profesor,
        nombre,
        fecha,
        impartido,
        cantcuadros,
        ubicacion,
        modalidad },
      { new: true }
    );
    return res.json(PosgradoUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPosgrado = async (req, res) => {
  try {
    const Posgrado = await Posgrado.findById(req.params.id);
    if (!Posgrado) return res.status(404).json({ message: "Posgrado not found" });
    return res.json(Posgrado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};





