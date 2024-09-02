import { Router } from "express";
import {
  getExcelAdmin,
  getExcelFaculty,
  getExcelProfesor
} from "../controllers/excel.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/exceladmin", auth, getExcelAdmin);

router.get("/excelfaculty/:_id", auth, getExcelFaculty);

router.get("/excelprofesor/:_id", auth, getExcelProfesor);



export default router;