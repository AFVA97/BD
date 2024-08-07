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

router.get("/invcient", auth, getInvCients);

router.post("/invcient/:tipo", auth, createInvCient);

router.get("/invcient/:id", auth, getInvCient);

router.get("/invcient/:idProfesor", auth, getInvCientProfesor);

router.put("/invcient/:id", auth, updateInvCient);

router.delete("/invcient/:id", auth, deleteInvCient);

export default router;