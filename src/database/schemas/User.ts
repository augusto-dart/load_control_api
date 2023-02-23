import mongoose from "mongoose";

const User = new mongoose.Schema({
    usuario: { type: String, required: true, unique: true, lowerCase: true },
    nome: { type: String, required: true, unique: true, lowerCase: true },
    email: { type: String, required: true, unique: true, lowerCase: true },
    senha: { type: String, required: true, select: false },
    criadoEm: { type: Date, default: Date.now },
});


export default mongoose.model("User", User);