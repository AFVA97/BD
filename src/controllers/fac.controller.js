import Facultad from "../models/fac.model.js"


export const getFacultad = async (req, res) => {
    try {
        const Facultads = await Facultad.find({ nombre : req.params.id });
        res.json(Facultads);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

export const getFacultads = async (req, res) => {
    try {
        const Facultads = await Facultad.find();
        res.json(Facultads);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

export const createFacultad =async(req,res)=>{
    try {
        const {nombre,
            abreviatura,
        }=req.body;
            const newFacultad=new Facultad({nombre, abreviatura});
            const FacultadSaved=await newFacultad.save()
            res.json({FacultadSaved})
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteFacultad = async (req, res) => {
    try {
        const deletedFacultad = await Facultad.findByIdAndDelete(req.params.id);
        if (!deletedFacultad)
          return res.status(404).json({ message: "Facultad not found" });
    
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};


