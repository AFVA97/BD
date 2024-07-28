import User from "../models/asignatura.model.js"
import createAccessToken from "../libs/jwt.js"

export const register= async (req,res)=>{
    const {username,ciuser,facuser,active,password}=req.body
    
    try {
        const passwordHash=await bcryptjs.hash(password,10);
        const newUser= new User({
            username,
            ciuser,
            facuser,
            active,
            password:passwordHash
        })

        const userSaved=await newUser.save()
        const tokenusername=await createAccessToken({username:userSaved.username})
        const tokenuserType=await createAccessToken({tipo:userSaved.tipo})
        
        res.cookie("tokenusername",tokenusername)
        res.cookie("tokenuserType",tokenuserType)
                
        res.json({
            username:userSaved.username            
        })
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
}

export const login=async(req,res)=>{
    const {username,password}=req.body
    
    try {
        const userFound=await User.findOne({username})
        if(!userFound)
            return res.status(400).json({message:"User Not Found"});

        const isMatch=await bcryptjs.compare(password,userFound.password);

        if(!isMatch){
            return res.status(400).json({message:"Incorrect Password"})
        }

        const tokenusername=await createAccessToken({username:userFound.username})
        
        res.cookie("tokenusername",tokenusername)
                
        res.json({
            username:userFound.username,
            tipo:userFound.tipo,
            astive:userFound.active
        })
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const logout=(req,res)=>{
    res.cookie("tokenusername","",{expires: new Date(0)})
    return res.sendStatus(200)
}

export const profile= async (req,res)=>{
    const userFound=await User.findOne(req.user.username)
    if(!userFound)return res.status(400).json({massage:"User Not Found"})
        return res.json({
            username:userFound.username,
            tipo:userFound.tipo,
            active:userFound.active,
            ciuser:userFound.ciuser,
            facuser:userFound.facuser
    })
}