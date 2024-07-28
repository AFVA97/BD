import Carrera from "../models/carrera.model.js"


export const getCarrera = async (req, res) => {
    try {
        const carreras = await Carrera.find({ facultad : req.user.id });
        res.json(carreras);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

export const getCarreras = async (req, res) => {
    try {
        const carreras = await Carrera.find();
        res.json(carreras);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

export const createCarrera =async(req,res)=>{
    try {
        const {nombre,
            facultad=req.user.id,
        }=req.body;
            const newCarrera=new Carrera({nombre,
                facultad});
            const carreraSaved=await newCarrera.save()
            res.json({carreraSaved})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteCarrera = async (req, res) => {
    try {
        const deletedCarrera = await Carrera.findByIdAndDelete(req.params.id);
        if (!deletedCarrera)
          return res.status(404).json({ message: "Carrera not found" });
    
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

export const updateCarrera = async (req, res) => {
    try {
        const { nombre, facultad } = req.body;
        const CarreraUpdated = await Carrera.findOneAndUpdate(
          { _id: req.params.id },
          { nombre,facultad },
          { new: true }
        );
        return res.json(CarreraUpdated);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};



