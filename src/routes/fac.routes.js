import { Router } from "express";
import {
  getFacultad,
  getFacultads,
  createFacultad,
  updateFacultad,
  deleteFacultad
} from "../controllers/fac.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/facultad", auth, getFacultads);

router.post("/facultad", auth, createFacultad);

router.get("/facultad/:id", auth, getFacultad);

router.put("/facultad/:_id",auth,updateFacultad);

router.delete("/facultad/:id", auth, deleteFacultad);

export default router;