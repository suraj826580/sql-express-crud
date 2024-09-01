import { Router } from "express";
import * as Controllers from "../controllers/sqlControllers.js";
const routes = Router();

routes.get("/get", Controllers.get);

export default routes;
