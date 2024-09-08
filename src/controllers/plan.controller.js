import Planes from "../models/plan.model.js"




export const getplanes = async (req, res) => {
    try {
        const planess = await Planes.find();
        res.json(planess);
      } catch (error) {
        return res.status(500).json([ error.message ]);
      }
};

export const createplanes =async(req,res)=>{
    try {
        const {nombre
        }=req.body;
            const newplanes=new Planes({nombre});
            const planesSaved=await newplanes.save()
            res.json({planesSaved})
    } catch (error) {
        return res.status(500).json([error.message ]);
    }
}

export const deleteplanes = async (req, res) => {
    try {
        const deletedplanes = await Planes.findByIdAndDelete(req.params.id);
        if (!deletedplanes)
          return res.status(404).json(["planes not found" ]);
    
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json([error.message ]);
      }
};




