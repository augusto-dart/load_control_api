import { Request, Response } from "express";
import User from "../database/schemas/User";

class UserController {


    async create(request: Request, response: Response) {
        const { usuario, email, senha, nome } = request.body;
        try {
            const user = await User.create({ usuario, email, senha, nome });
            return response.json(user);
        } catch (error) {
            return response.status(500).send(error);
        }
    }

    async update(request: Request, response: Response) {
        const { usuario, email, senha, nome } = request.body;
        try {
            const user = await User.updateOne({ usuario: usuario }, { email, senha, nome });
            return response.json(user);
        } catch (error) {
            return response.status(500).send(error);
        }
    }

    async delete(request: Request, response: Response) {
        const { usuario } = request.body;
        try {
            const user = await User.deleteOne({ usuario: usuario });
            return response.json(user);
        } catch (error) {
            return response.status(500).send(error);
        }
    }

    async get(request: Request, response: Response) {
        const { usuario } = request.body;
        try {
            const user = await User.find({ usuario: usuario }).exec();
            return response.json(user);
        } catch (error) {
            return response.status(500).send(error);
        }
    }

}


export default new UserController();