import { Router } from "express";
import {
  getCarrera,
  getCarreras,
  getCarreraProf,
  createCarrera,
  deleteCarrera,
  updateCarrera
} from "../controllers/carrera.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/carrera", auth, getCarreras);

router.post("/carrera", auth, createCarrera);

router.get("/carrera/:id", auth, getCarrera);

router.get("/carrera/prof/:id", auth, getCarreraProf);

router.put("/carrera/:id", auth, updateCarrera);

router.delete("/carrera/:id", auth, deleteCarrera);

export default router;