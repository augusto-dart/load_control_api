import mongoose from "mongoose";

const ExerciseSerie = new mongoose.Schema({
    serie: { type: Number, required: true },
    carga: { type: String },
    repeticoes: { type: Number },
    intervalo: { type: Number },
});

const Exercise = new mongoose.Schema({
    id: { type: mongoose.Types.ObjectId },
    titulo: { type: String, required: true },
    descricao: { type: String },
    observacao: { type: String },
    linkVideo: { type: String },
    usuario: { type: String },
    series: [{ type: ExerciseSerie }]
});

const Treino = new mongoose.Schema({
    id: { type: mongoose.Types.ObjectId },
    titulo: { type: String, required: true },
    observacao: { type: String },
    usuario: { type: String },
    exercicios: [{ type: Exercise }]
});

var ExerciseModel = mongoose.model("Exercise", Exercise);
var TreinoModel = mongoose.model("Treino", Treino);

module.exports = {
    Exercise: ExerciseModel,
    Treino: TreinoModel
}
