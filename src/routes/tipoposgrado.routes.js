import { Router } from "express";
import {
  getTipoPosgrado,
  getTipoPosgradoss,
  createTipoPosgrado,
  deleteTipoPosgrado
} from "../controllers/tipoposgrado.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/tipoposgrado",getTipoPosgrado);

router.get("/tipoposgrado/:_id", getTipoPosgradoss);

router.post("/tipoposgrado", createTipoPosgrado);

router.delete("/tipoposgrado/:id", deleteTipoPosgrado);

export default router;