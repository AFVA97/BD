import express from "express"
import morgan from "morgan"
import authRoutes from "./routes/auth.routes.js"
import asignaturaRoutes from "./routes/asignatura.routes.js"
import carreraRoutes from "./routes/carrera.routes.js"
import extunivRoutes from "./routes/extuniv.routes.js"
import facRoutes from "./routes/fac.routes.js"
import nombreAsigRoutes from "./routes/nombreAsig.routes.js"
import tipoCursoRoutes from './routes/tipocurso.routes.js'
import invcientRoutes from "./routes/invcient.routes.js"
import posgradoRoutes from "./routes/posgrado.routes.js"
import profesorRoutes from "./routes/profesor.routes.js"
import excelRoutes from "./routes/excel.routes.js"
import cookieParser from "cookie-parser";
import cors from "cors";



const app =express();

app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api",authRoutes);
app.use("/api",excelRoutes)
app.use("/api",asignaturaRoutes)
app.use("/api",carreraRoutes)
app.use("/api",extunivRoutes)
app.use("/api",facRoutes)
app.use("/api",invcientRoutes)
app.use("/api",nombreAsigRoutes)
app.use("/api",tipoCursoRoutes)
app.use("/api",posgradoRoutes)
app.use("/api",profesorRoutes)

export default app