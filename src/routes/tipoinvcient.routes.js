import { Router } from "express";
import {
  getTipoInvCient,
  createTipoInvCient,
  deleteTipoInvCient
} from "../controllers/tipoinvcient.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/tipoinvcient", auth, getTipoInvCient);

router.post("/tipoinvcient", auth, createTipoInvCient);

router.delete("/tipoinvcient/:id", auth, deleteTipoInvCient);

export default router;