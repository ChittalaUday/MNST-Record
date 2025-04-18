import express,{Express,Request,Response} from 'express';
import mongoose,{ Schema, Model, Document} from 'mongoose';
let b = mongoose.connect('mongodb://127.0.0.1:27017/typescriptdatabase');
b.then(() => {
    console.log("connection success");
});
b.catch((err) => {
    console.log("connection fail");
});

const app: Express = express();
app.listen(5002, () => {
    console.log("server running successfully");
    console.log("Developed by: 23MH5A0505");
    // console.log("Developed by: 22MH1A0536");
});
app.use(express.json());

interface Csedata extends Document {
    _id: Number,
    name: String,
    dept: String,
    result: String
}

let cseSchema: Schema = new mongoose.Schema({
    _id: Number,
    name: String,
    dept: String,
    result: String
});

let cseModel: Model<Csedata> = mongoose.model<Csedata>("rocks", cseSchema, "tscollection");
app.post('/post', async (req: Request, res: Response) => {
    const data: Csedata = new cseModel({
        _id: req.body.id,
        name: req.body.name,
        dept: req.body.dept,
        result: req.body.result
    });
    const m = new cseModel(data);
    await m.save().then(() => {
        res.send("Data inserted successfully");
    });
});
app.get("/cse/studentsdata", async (req: Request, res: Response) => {
    const students = await cseModel.find();
    res.json(students);
});
app.get('/get', async (req: Request, res: Response) => {
    try {
        const result = await cseModel.find();
        res.send(result);
    } catch (error) {
        res.status(500).send("Error fetching data");
    }
});
app.patch('/patch/:id', async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        await cseModel.updateOne({ _id: id }, { $set: req.body });
        res.send("Data updated successfully");
    } catch (error) {
        res.status(500).send("Error updating data");
    }
});
app.delete('/delete/:id', async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        await cseModel.deleteOne({ _id: id });
        res.send("Data deleted successfully");
    } catch (error) {
        res.status(500).send("Error deleting data");
    }
});