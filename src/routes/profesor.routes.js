import { Router } from "express";
import {
  getProfesor,
  getProfesors,
  createProfesor,
  deleteProfesor,
  updateProfesor
} from "../controllers/profesor.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/profesor", auth, getProfesors);

router.post("/profesor", auth, createProfesor);

router.get("/profesor/:id", auth, getProfesor);

router.put("/profesor/:id", auth, updateProfesor);

router.delete("/profesor/:id", auth, deleteProfesor);

export default router;