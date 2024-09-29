import express from "express";
import {
  deleteTp,
  getAllTp,
  getTpByTpNumber,
  postTp,
} from "../controllers/cases.js";

const routes = express();

routes.get("/", (req, res) => {
  res.status(200).json({ message: "API working..." });
});
routes.get("/tp", getAllTp);
routes.get("/tp/:tpNumber", getTpByTpNumber);
routes.post("/tp", postTp);
routes.delete("/tp/:tpNumber", deleteTp);

export default routes;
