import { Router } from "express";
import {
  getFacultad,
  getFacultads,
  createFacultad,
  deleteFacultad
} from "../controllers/fac.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/facultad", auth, getFacultads);

router.post("/facultad", auth, createFacultad);

router.get("/facultad/:id", auth, getFacultad);

router.delete("/facultad/:id", auth, deleteFacultad);

export default router;