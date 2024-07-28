import { Router } from "express";
import {
  getExtUniv,
  getExtUnivs,
  createExtUniv,
  deleteExtUniv,
  updateExtUniv
} from "../controllers/extuniv.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/extuniv", auth, getExtUnivs);

router.post("/extuniv/:tipo", auth, createExtUniv);

router.get("/extuniv/:id", auth, getExtUniv);

router.put("/extuniv/:id", auth, updateExtUniv);

router.delete("/extuniv/:id", auth, deleteExtUniv);

export default router;