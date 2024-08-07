import { Router } from "express";
import {
  getTipoExtUniv,
  getTipoExtUnivss,
  createTipoExtUniv,
  deleteTipoExtUniv
} from "../controllers/tipoExt.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/tipoextuniv", getTipoExtUniv);

router.get("/tipoextuniv/:_id", getTipoExtUnivss);

router.post("/tipoextuniv", createTipoExtUniv);

router.delete("/tipoextuniv/:id", deleteTipoExtUniv);

export default router;