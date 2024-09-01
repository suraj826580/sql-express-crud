import express from "express";
import { sequelize } from "./src/configs/database.js";
import routes from "./src/routes.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/", routes);

// sequelize
//   .sync({ alter: true })
//   .then(() => {
const server = app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log(
      `Database connected successfully and running on port no ${
        server.address().port
      }`
    );
  } catch (error) {
    console.log(error.message);
  }
});
// })
// .catch((err) => console.log(err));
