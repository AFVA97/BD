import { Router } from "express";
import {
  getPosgrado,
  getPosgrados,
  getPosgradoProfesor,
  createPosgrado,
  deletePosgrado,
  updatePosgrado
} from "../controllers/posgrado.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/posgrado",auth, getPosgrados);

router.post("/posgrado", auth, auth,createPosgrado);

router.get("/posgrado/:id", auth,auth, getPosgrado);

router.get("/posgrado/prof/:idProfesor", auth, getPosgradoProfesor);

router.put("/posgrado/:_id", auth, updatePosgrado);

router.delete("/posgrado/:id", auth, deletePosgrado);

export default router;