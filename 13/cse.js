"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
let b = mongoose_1.default.connect('mongodb://127.0.0.1:27017/typescriptdatabase');
b.then(() => {
    console.log("connection success");
});
b.catch((err) => {
    console.log("connection fail");
});
const app = (0, express_1.default)();
app.listen(5002, () => {
    console.log("server running successfully");
    console.log("Developed by: 22MH1A0539");
});
app.use(express_1.default.json());
let cseSchema = new mongoose_1.default.Schema({
    _id: Number,
    name: String,
    dept: String,
    result: String
});
let cseModel = mongoose_1.default.model("rocks", cseSchema, "tscollection");
app.post('/post', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = new cseModel({
        _id: req.body.id,
        name: req.body.name,
        dept: req.body.dept,
        result: req.body.result
    });
    const m = new cseModel(data);
    yield m.save().then(() => {
        res.send("Data inserted successfully");
    });
}));
app.get("/cse/studentsdata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield cseModel.find();
    res.json(students);
}));
app.get('/get', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cseModel.find();
        res.send(result);
    }
    catch (error) {
        res.status(500).send("Error fetching data");
    }
}));
app.patch('/patch/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield cseModel.updateOne({ _id: id }, { $set: req.body });
        res.send("Data updated successfully");
    }
    catch (error) {
        res.status(500).send("Error updating data");
    }
}));
app.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield cseModel.deleteOne({ _id: id });
        res.send("Data deleted successfully");
    }
    catch (error) {
        res.status(500).send("Error deleting data");
    }
}));
