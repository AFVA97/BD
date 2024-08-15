import User from "../models/user.model.js"
import createAccessToken from "../libs/jwt.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { TOKEN_SECRET } from "../config.js"

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
        
        
                
        res.json({
            username:userSaved.username            
        })
        
    } catch (error) {
        res.status(500).json([error])
    }
    
}
export const getusers=async(req,res)=>{
    try {
        const Users = await User.find();        
        res.json(Users);
      } catch (error) {
        return res.status(500).json([error.message ]);
      }
}
export const login=async(req,res)=>{
    const {username,password}=req.body
    
    try {
        const userFound=await User.findOne({username})
        if(!userFound)
            return res.status(400).json(["User Not Found"]);

        const isMatch=await bcryptjs.compare(password,userFound.password);

        if(!isMatch){
            return res.status(400).json(["Incorrect Password"])
        }

        const tokenusername=await createAccessToken({username:userFound.username})
        
        res.cookie("tokenusername",tokenusername)
                
        res.json(
            // username:userFound.username,
            // active:userFound.active
            userFound
        )
        
    } catch (error) {
        res.status(500).json([error.message])
    }
}

export const logout=(req,res)=>{
    res.cookie("tokenusername","",{expires: new Date(0)})
    return res.sendStatus(200)
}

export const profile= async (req,res)=>{
    const userFound=await User.findOne({username:req.user.username})
    if(!userFound)return res.status(400).json(["User Not Found"])
        return res.json({
            username:userFound.username,
            tipo:userFound.tipo,
            active:userFound.active,
            ciuser:userFound.ciuser,
            facuser:userFound.facuser
    })
}

export const verifyToken=async(req,res)=>{
    const {tokenusername}=req.cookies


    if(!tokenusername) return res.status(401).json(["No Autorizado"])

    jwt.verify(tokenusername,TOKEN_SECRET,async(err,user)=>{
        if(err) return res.status(401).json(["No Autorizado"])
        const {username} =user
            
        const userFound=await User.findOne({username})
        if(!userFound)return res.status(401).json(["No Autorizado"])


        return res.json(userFound)
    })
}

export const getuser = async (req, res) => {
    try {
      console.log(req.params._id);
      
        const user = await User.findById( req.params._id );
        
        res.json(user);
      } catch (error) {
        return res.status(500).json(error.message );
      }
};

export const getuserCI = async (req, res) => {
    try {
      console.log(req.params._id);
      
        const user = await User.findById( {ciuser:req.params._id} );
        
        res.json(user);
      } catch (error) {
        return res.status(500).json(error.message );
      }
};
export const getuserFAC = async (req, res) => {
    try {
      console.log(req.params._id);
      
        const user = await User.findById( {facuser:req.params._id} );
        
        res.json(user);
      } catch (error) {
        return res.status(500).json(error.message );
      }
};

export const deleteuser = async (req, res) => {
    
        
    try {
        
        const deleteduser = await User.findByIdAndDelete(req.params._id);
        if (!deleteduser)
          return res.status(404).json(["user not found" ]);
    
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json([ error.message ]);
      }
};
