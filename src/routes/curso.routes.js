import { Router } from "express";
import {
  getCursos,
  createCurso,
  deleteCurso,
} from "../controllers/curso.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/curso", auth, getCursos);

router.post("/curso", auth, createCurso);

router.delete("/curso/:id", auth, deleteCurso);

export default router;