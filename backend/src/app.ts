import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

const uri: string = `mongodb+srv://maanas:mahato@cluster0.fon9sup.mongodb.net/?retryWrites=true&w=majority`;


mongoose.connect(uri).then(() => {
    app.listen(8000, () => {
        console.log('sever running on: http://localhost:8000');
    })
}
).catch(error => {
    throw error;
});