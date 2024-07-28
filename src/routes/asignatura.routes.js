import { Router } from "express";
import {
  getAsignatura,
  getAsignaturas,
  createAsignatura,
  deleteAsignatura,
  updateAsignatura
} from "../controllers/asignatura.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/asignatura", auth, getAsignaturas);

router.post("/asignatura/:carrera", auth, createAsignatura);

router.get("/asignatura/:id", auth, getAsignatura);

router.put("/asignatura/:id", auth, updateAsignatura);

router.delete("/asignatura/:id", auth, deleteAsignatura);

export default router;