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

router.get("/nombreasignatura",  getNombreAsigs);

router.post("/nombreasignatura",  createNombreAsig);

router.get("/nombreasignatura/:id",  getNombreAsig);

router.put("/nombreasignatura/:_id",updateNombreAsig);

router.delete("/nombreasignatura/:id",  deleteNombreAsig);

export default router;