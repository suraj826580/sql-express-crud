import { Router } from "express";
import * as Controllers from "../controllers/userControllers.js";
const routes = Router();
routes.post("/create-user", Controllers.createUser);
routes.get("/get-users", Controllers.getUsers);
routes.get("/get-user/:id", Controllers.getUser);
routes.delete("/delete-user/:id", Controllers.deleteUser);
routes.patch("/update-user/:id", Controllers.updateUser);

export default routes;
