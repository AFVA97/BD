import { Router } from "express";
import {
  getPosgrado,
  getPosgrados,
  createPosgrado,
  deletePosgrado,
  updatePosgrado
} from "../controllers/posgrado.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/posgrado", auth, getPosgrados);

router.post("/posgrado/:tipo", auth, createPosgrado);

router.get("/posgrado/:id", auth, getPosgrado);

router.put("/posgrado/:id", auth, updatePosgrado);

router.delete("/posgrado/:id", auth, deletePosgrado);

export default router;