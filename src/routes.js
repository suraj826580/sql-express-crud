import { Router } from "express";
const routes = Router();
import sqlRoutes from "./routes/sqlRoutes.js";
import userRoutes from "./routes/userRoutes.js";

routes.use("/sql-routes", sqlRoutes);
routes.use("/user", userRoutes);

// Not Found
routes.use("*", (req, res) => {
  res.json({ message: "Route Not Found" });
});

export default routes;
