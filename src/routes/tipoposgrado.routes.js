import { Router } from "express";
import {
  getTipoPosgrado,
  getTipoPosgradoss,
  createTipoPosgrado,
  deleteTipoPosgrado
} from "../controllers/tipoposgrado.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/tipoposgrado", auth, getTipoPosgrado);

router.get("/tipoposgrado/:_id", auth, getTipoPosgradoss);

router.post("/tipoposgrado", auth,createTipoPosgrado);

router.delete("/tipoposgrado/:id", auth, deleteTipoPosgrado);

export default router;