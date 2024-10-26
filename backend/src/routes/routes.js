import express from "express";
import {
  deleteTp,
  getAllTp,
  getTpById,
  getTpByTpCNPJ,
  postTp,
} from "../controllers/cases.js";

const routes = express();

routes.get("/", (req, res) => {
  res.status(200).json({ message: "API working..." });
});
routes.get("/tp", getAllTp);
routes.post("/tp", postTp);
routes.get("/tp/cnpj/:tpCnpj", getTpByTpCNPJ);
routes.get("/tp/:id", getTpById);
routes.delete("/tp/:tpId", deleteTp);

export default routes;
