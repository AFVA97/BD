import { Router } from "express";
import {register,login,logout, profile, verifyToken, getusers,getuser,deleteuser, getuserCI, getuserFAC} from "../controllers/auth.controller.js"
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
router.get('/users/:_id',authRequired,getuser)
router.get('/users/ci/:_id',authRequired,getuserCI)
router.get('/users/fac/:_id',authRequired,getuserFAC)

router.delete('/users/:_id',authRequired,deleteuser)

export default router 