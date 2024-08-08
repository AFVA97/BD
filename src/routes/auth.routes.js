import { Router } from "express";
import {register,login,logout, profile, verifyToken, getusers,getuser,deleteuser} from "../controllers/auth.controller.js"
import { authRequired } from "../middlewares/validateToken.js";
import {registerSchema,loginSchema} from "../schemas/auth.schema.js"
import {validateSchema} from "../middlewares/validator.middleware.js"

const router=Router();

router.post('/register',authRequired,register)
router.post('/login', login)
router.post('/logout',logout)
router.get('/verify',verifyToken)
router.get('/profile', authRequired,profile)
router.get('/users',authRequired,getusers)
router.get('/users/:id',authRequired,getuser)
router.delete('/user/:id',authRequired,deleteuser)

export default router 