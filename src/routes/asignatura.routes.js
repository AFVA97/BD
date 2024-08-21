import { Router } from "express";
import {
  getAsignatura,
  getAsignaturaProf,
  getAsignaturaFac,
  getAsignaturas,
  createAsignatura,
  deleteAsignatura,
  updateAsignatura
} from "../controllers/asignatura.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/asignatura", auth, getAsignaturas);

router.post("/asignatura", auth, createAsignatura);

router.get("/asignatura/:id", auth, getAsignatura);

router.get("/asignatura/prof/:id", auth, getAsignaturaProf);

router.get("/asignatura/fac/:_id", auth, getAsignaturaFac);

router.put("/asignatura/:id", auth, updateAsignatura);

router.delete("/asignatura/:id", auth, deleteAsignatura);

export default router;