"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", routes_1.default);
const uri = `mongodb+srv://maanas:mahato@cluster0.fon9sup.mongodb.net/?retryWrites=true&w=majority`;
mongoose_1.default.connect(uri).then(() => {
    app.listen(8000, () => {
        console.log('sever running on: http://localhost:8000');
    });
}).catch(error => {
    throw error;
});
