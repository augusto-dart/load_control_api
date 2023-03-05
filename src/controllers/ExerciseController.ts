import { Request, Response } from "express";
import Exercise from "../database/schemas/Exercise";

class ExerciseController {


    async create(request: Request, response: Response) {
        try {
            const exercise = await Exercise.create(request.body);
            return response.json(exercise);
        } catch (error) {
            return response.status(500).send(error);
        }
    }

    async update(request: Request, response: Response) {
        const { usuario, email, senha, nome } = request.body;
        try {
            const user = await Exercise.updateOne({ usuario: usuario }, { email, senha, nome });
            return response.json(user);
        } catch (error) {
            return response.status(500).send(error);
        }
    }

    async delete(request: Request, response: Response) {
        const { usuario } = request.body;
        try {
            const user = await Exercise.deleteOne({ usuario: usuario });
            return response.json(user);
        } catch (error) {
            return response.status(500).send(error);
        }
    }

    async get(request: Request, response: Response) {
        const { usuario } = request.body;

        try {
            const exercise = await Exercise.find({ usuario: usuario }).exec();
            return response.json(exercise);
        } catch (error) {
            return response.status(500).send(error);
        }
    }

}

export default new ExerciseController();