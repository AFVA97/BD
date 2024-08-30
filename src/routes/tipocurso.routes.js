import { Router } from "express";
import {
  getTipoCurso,
  getTipoCursos,
  createTipoCurso,
  updateTipoCurso,
  deleteTipoCurso
} from "../controllers/TipoCurso.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/tipocurso", auth, getTipoCursos);

router.post("/tipocurso", auth, createTipoCurso);

router.get("/tipocurso/:id", auth, getTipoCurso);

router.put("/tipocurso/:_id", auth, updateTipoCurso);

router.delete("/tipocurso/:_id", auth, deleteTipoCurso);

export default router;