import express from "express";
import {
  getPerson,
  CreatePerson,
  UpdatePerson,
  DeletePerson,
} from "./controllers.js";
const routes = express.Router();

routes.get("/", getPerson);
routes.post("/", CreatePerson);
routes.patch("/:id", UpdatePerson);
routes.delete("/:id", DeletePerson);

export default routes;