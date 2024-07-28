import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired=(req,res,next)=>{
    const{tokenusername} =req.cookies;
    if(!tokenusername)
        return res.status(401).json({message:"No token, authorization denied"})

    jwt.verify(tokenusername,TOKEN_SECRET,(err, user)=>{
        if(err) return res.status(403).json({message:"Invalid Token"})
        
        req.user=user;
        next();

    })

   
}