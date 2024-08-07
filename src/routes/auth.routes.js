import { Router } from "express";
import {register,login,logout, profile, verifyToken} from "../controllers/auth.controller.js"
import { authRequired } from "../middlewares/validateToken.js";
import {registerSchema,loginSchema} from "../schemas/auth.schema.js"
import {validateSchema} from "../middlewares/validator.middleware.js"

const router=Router();

router.post('/register',authRequired,register)
router.post('/login', login)
router.post('/logout',logout)
router.get('/verify',verifyToken)
router.get('/profile', authRequired,profile)

export default router 