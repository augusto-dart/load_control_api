import { Router } from "express";
import ExerciseController from "./controllers/ExerciseController";
import TreinoController from "./controllers/TreinoController";
import UserController from "./controllers/UserController";


const routes = Router();


routes.post("/user", UserController.create);
routes.put("/user", UserController.update);
routes.delete("/user", UserController.delete);
routes.get("/user", UserController.get);

routes.post("/exercise", ExerciseController.create);
routes.put("/exercise", ExerciseController.update);
routes.delete("/exercise", ExerciseController.delete);
routes.get("/exercise", ExerciseController.get);


routes.post("/treino", TreinoController.create);
routes.put("/treino", TreinoController.update);
routes.delete("/treino", TreinoController.delete);
routes.get("/treino", TreinoController.get);

routes.get("/", (req, res) => {
    res.send("");
});


export default routes;
