import { Router } from "express";
import {
  getTipoPosgrado,
  createTipoPosgrado,
  deleteTipoPosgrado
} from "../controllers/tipoposgrado.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/tipoposgrado", auth, getTipoPosgrado);

router.post("/tipoposgrado", auth,createTipoPosgrado);

router.delete("/tipoposgrado/:id", auth, deleteTipoPosgrado);

export default router;