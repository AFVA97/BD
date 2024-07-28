import express from "express"
import morgan from "morgan"
import authRoutes from "./routes/auth.routes.js"
import asignaturaRoutes from "./routes/asignatura.routes.js"
import carreraRoutes from "./routes/carrera.routes.js"
import extunivRoutes from "./routes/extuniv.routes.js"
import facRoutes from "./routes/fac.routes.js"
import invcientRoutes from "./routes/invcient.routes.js"
import posgradoRoutes from "./routes/posgrado.routes.js"
import profesorRoutes from "./routes/profesor.routes.js"
import tipoExtRoutes from "./routes/tipoExt.routes.js"
import tipoinvcientRoutes from "./routes/tipoinvcient.routes.js"
import tipoposgradoRoutes from "./routes/tipoposgrado.routes.js"
import cookieParser from "cookie-parser";



const app =express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api",authRoutes);
app.use("/api",asignaturaRoutes)
app.use("/api",carreraRoutes)
app.use("/api",extunivRoutes)
app.use("/api",facRoutes)
app.use("/api",invcientRoutes)
app.use("/api",posgradoRoutes)
app.use("/api",profesorRoutes)
app.use("/api",tipoExtRoutes)
app.use("/api",tipoinvcientRoutes)
app.use("/api",tipoposgradoRoutes)

export default app