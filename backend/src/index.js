import "dotenv/config";
import express from "express";
import routes from "./routes/routes.js";
import dbConnection from "./services/dbConnection.js";

const db = await dbConnection();

db.on("error", (error) => {
  console.error("Erro de conexão com o Banco de dados", error);
});

db.once("open", () => {
  console.log("Conexão com DB realizada com sucesso.");
});

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`API running on port ${port}`);
