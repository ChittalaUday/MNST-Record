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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var b = mongoose_1.default.connect('mongodb://127.0.0.1:27017/typescriptdatabase');
b.then(function () {
    console.log("connection success");
});
b.catch(function (err) {
    console.log("connection fail");
});
var app = (0, express_1.default)();
app.listen(5002, function () {
    console.log("server running successfully");
    console.log("Developed by: 22MH1A0544");
});
app.use(express_1.default.json());
var cseSchema = new mongoose_1.default.Schema({
    _id: Number,
    name: String,
    dept: String,
    result: String
});
var cseModel = mongoose_1.default.model("rocks", cseSchema, "tscollection");
app.post('/post', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, m;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = new cseModel({
                    _id: req.body.id,
                    name: req.body.name,
                    dept: req.body.dept,
                    result: req.body.result
                });
                m = new cseModel(data);
                return [4 /*yield*/, m.save().then(function () {
                        res.send("Data inserted successfully");
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
app.get("/cse/studentsdata", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var students;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cseModel.find()];
            case 1:
                students = _a.sent();
                res.json(students);
                return [2 /*return*/];
        }
    });
}); });
app.get('/get', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, cseModel.find()];
            case 1:
                result = _a.sent();
                res.send(result);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).send("Error fetching data");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.patch('/patch/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = parseInt(req.params.id);
                return [4 /*yield*/, cseModel.updateOne({ _id: id }, { $set: req.body })];
            case 1:
                _a.sent();
                res.send("Data updated successfully");
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).send("Error updating data");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.delete('/delete/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = parseInt(req.params.id);
                return [4 /*yield*/, cseModel.deleteOne({ _id: id })];
            case 1:
                _a.sent();
                res.send("Data deleted successfully");
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(500).send("Error deleting data");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
