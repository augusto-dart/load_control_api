import { Request, Response } from "express";
const { Treino } = require('../database/schemas/Exercise');

class TreinoController {

    async create(request: Request, response: Response) {
        try {
            const body = {
                titulo: request.body['titulo'],
                observacao: request.body['observacao'],
                usuario: request.body['usuario'],
                exercicios: request.body['exercicios'],
            }

            const treino = await Treino.create(body);
            return response.json(treino);
        } catch (error) {
            return response.status(500).send(error);
        }
    }

    async update(request: Request, response: Response) {
        const body = request.body;
        try {
            const user = await Treino.updateOne({ _id: body['_id'] }, body);
            return response.json(user);
        } catch (error) {
            return response.status(500).send(error);
        }
    }

    async delete(request: Request, response: Response) {
        const { body } = request.body;
        try {
            const user = await Treino.deleteOne({ _id: body['_id'] });
            return response.json(user);
        } catch (error) {
            return response.status(500).send(error);
        }
    }

    async get(request: Request, response: Response) {
        const { usuario } = request.body;

        try {
            const exercise = await Treino.find({ usuario: usuario }).exec();
            return response.json(exercise);
        } catch (error) {
            return response.status(500).send(error);
        }
    }

}

export default new TreinoController();