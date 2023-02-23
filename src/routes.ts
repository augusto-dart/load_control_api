import { Router } from "express";
import UserController from "./controllers/UserController";


const routes = Router();


routes.post("/user", UserController.create);

routes.put("/user", UserController.update);

routes.delete("/user", UserController.delete);

routes.get("/user", UserController.get);


export default routes;
