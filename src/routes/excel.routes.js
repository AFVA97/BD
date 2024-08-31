import { Router } from "express";
import {
  getExcelAdmin,
  getExcelFaculty,
  getExcelProfesor
} from "../controllers/excel.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/exceladmin", auth, getExcelAdmin);

router.get("/excelfaculty", auth, getExcelFaculty);

router.get("/excelprofesor", auth, getExcelProfesor);



export default router;