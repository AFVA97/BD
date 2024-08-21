import { Router } from "express";
import {
  getNombreAsig,
  getNombreAsigs,
  createNombreAsig,
  updateNombreAsig,
  deleteNombreAsig
} from "../controllers/nombreAsig.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/nombreasignatura", auth, getNombreAsigs);

router.post("/nombreasignatura", auth, createNombreAsig);

router.get("/nombreasignatura/:id", auth, getNombreAsig);

router.put("/nombreasignatura/:_id", auth, updateNombreAsig);

router.delete("/nombreasignatura/:id", auth, deleteNombreAsig);

export default router;