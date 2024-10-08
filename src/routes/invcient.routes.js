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

router.post("/invcient", auth, createInvCient);

router.get("/invcient/:_id", auth, getInvCient);

router.get("/invcient/prof/:idProfesor",auth, getInvCientProfesor);

router.put("/invcient/:id", auth, updateInvCient);

router.delete("/invcient/:id", auth, deleteInvCient);

export default router;