import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

const port = 3000;
const app = express();

const uri = "mongodb+srv://augusto:guguinha23@loadcontrolcluster.hnaavui.mongodb.net/?retryWrites=true&w=majority";

try {
    mongoose.connect(uri, () => console.log(" Mongoose is connected"));
} catch (e) {
    console.log("could not connect");
}
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log("Server is listening");
});