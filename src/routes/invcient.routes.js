import { Router } from "express";
import {
  getInvCient,
  getInvCientProfesor,
  getInvCients,
  createInvCient,
  deleteInvCient,
  updateInvCient
} from "../controllers/invcient.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/invcient",  getInvCients);

router.post("/invcient",  createInvCient);

router.get("/invcient/:id",  getInvCient);

router.get("/invcient/prof/:idProfesor", getInvCientProfesor);

router.put("/invcient/:id",  updateInvCient);

router.delete("/invcient/:id",  deleteInvCient);

export default router;