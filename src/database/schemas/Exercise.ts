import mongoose from "mongoose";
const Schema = mongoose;

const ExerciseSerie = new mongoose.Schema({
    serie: { type: Number, required: true },
    carga: { type: String },
    repeticoes: { type: Number },
    intervalo: { type: Number },
});

const Exercise = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String },
    observacao: { type: String },
    linkVideo: { type: String },
    usuario: { type: String },
    series: [{ type: ExerciseSerie }]
});


export default mongoose.model("Exercise", Exercise);