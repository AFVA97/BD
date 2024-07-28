import { Router } from "express";
import {
  getTipoExtUniv,
  createTipoExtUniv,
  deleteTipoExtUniv
} from "../controllers/tipoExt.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/tipoextuniv", auth, getTipoExtUniv);

router.post("/tipoextuniv", auth, createTipoExtUniv);

router.delete("/tipoextuniv/:id", auth, deleteTipoExtUniv);

export default router;