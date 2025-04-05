var express = require('express');
var mongoose = require('mongoose');
var app = express();
app.use(express.json());

let A = mongoose.connect('mongodb://127.0.0.1:27017/8b');

let bSchema = new mongoose.Schema({
    id:Number,
    name:String,
    year:Number,
    dept:String,
    percentage:Number,
});

let bmodel = new mongoose.model("csedata",bSchema);

app.post('/insertdata',async(req,res)=>{
    var data ={
        id:req.body.id,
        name:req.body.name,
        year:req.body.year,
        dept:req.body.dept,
        percentage:req.body.percentage
    };
    const createdate = await bmodel(data);
    await createdate.save();
    res.send("Created successfully");
});

app.patch('/data/update/:id',async(req,res)=>{
    const updated = await bmodel.findOneAndUpdate(
        { id: parseInt(req.params.id) },
        { $set: req.body },
        { new: true }
    );
    res.send("Updateded successfully");
});

app.get('/view/:id',async(req,res)=>{
    let data = await bmodel.findOne({id:req.params.id*1});
    res.json(data);
});

app.delete('/data/delete/:id', async (req, res) => {
    const deletedData = await bmodel.findOneAndDelete({ id: parseInt(req.params.id) });
    res.send("Deleted successfully");
    
});

app.listen(5000,()=>{
    console.log("Server running...!");
});