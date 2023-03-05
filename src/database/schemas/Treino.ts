import mongoose from "mongoose";
import Exercise from "./Exercise";

const Treino = new mongoose.Schema({
    titulo: { type: String, required: true },
    observacao: { type: String },
    usuario: { type: String },
    exercicios: [{ type: Exercise }]
});


export default mongoose.model("Treino", Treino);