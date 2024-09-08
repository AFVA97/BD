import { Router } from "express";
import {
  getplanes,deleteplanes,createplanes
} from "../controllers/plan.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/planes", auth, getplanes);

router.post("/planes", auth, createplanes);

router.delete("/planes/:id", auth, deleteplanes);

export default router;