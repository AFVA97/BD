import { Router } from "express";
import {
  getCarrera,
  getCarreras,
  createCarrera,
  deleteCarrera,
  updateCarrera
} from "../controllers/carrera.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/carrera", auth, getCarreras);

router.post("/carrera", auth, createCarrera);

router.get("/carrera", auth, getCarrera);

router.put("/carrera/:id", auth, updateCarrera);

router.delete("/carrera/:id", auth, deleteCarrera);

export default router;