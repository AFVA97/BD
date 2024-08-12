import { Router } from "express";
import {
  getTipoInvCient,
  getTipoInvCientss,
  createTipoInvCient,
  deleteTipoInvCient
} from "../controllers/tipoinvcient.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/tipoinvcient", getTipoInvCient);

router.get("/tipoinvcient/:_id", getTipoInvCientss);

router.post("/tipoinvcient",  createTipoInvCient);

router.delete("/tipoinvcient/:id",  deleteTipoInvCient);

export default router;