import { Request, Response } from "express";
const { Exercise } = require('../database/schemas/Exercise');

class ExerciseController {


    async create(request: Request, response: Response) {
        try {

            const body = {
                titulo: request.body['titulo'],
                descricao: request.body['descricao'],
                observacao: request.body['observacao'],
                linkVideo: request.body['linkVideo'],
                usuario: request.body['usuario'],
                series: request.body['series'],
            }

            const exercise = await Exercise.create(body);
            return response.json(exercise);
        } catch (error) {
            return response.status(500).send(error);
        }
    }

    async update(request: Request, response: Response) {
        const body = request.body;
        try {
            const user = await Exercise.updateOne({ _id: body['_id'] }, body);
            return response.json(user);
        } catch (error) {
            return response.status(500).send(error);
        }
    }

    async delete(request: Request, response: Response) {
        const { body } = request.body;
        try {
            const user = await Exercise.deleteOne({ _id: body['_id'] });
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