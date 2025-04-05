var express=require('express');
var fs = require('fs')
var app= express();
app.use(express.json());
var mobiles= JSON.parse(fs.readFileSync('./products.json'));

app.get("/products/mobiles",(req,res)=>{
    res.json(mobiles);
});

app.post("/products/newmobile",(req,res)=>{
    let newmobile= req.body;
    mobiles.push(newmobile);
    fs.writeFile('./products.json',JSON.stringify(mobiles),(err,data)=>{
        res.send("new mobile inserted successfully");
    })
})

app.patch("/products/mobiles/update/:id", (req, res) => {
    let updatemob = req.params.id * 1;
    let upmob = mobiles.find(el => el._id === updatemob);
    let index = mobiles.indexOf(upmob);
    Object.assign(upmob, req.body);
    mobiles[index] = upmob;
    fs.writeFile("./products.json", JSON.stringify(mobiles), (err,data) => {
        res.send("Updated successfully");
    });
});

app.delete("/products/mobiles/delete/:id",(req,res)=>{
    let did=req.params.id*1;
    let delmobile=mobiles.find(el =>el.id===did);
    if(!delmobile){
        res.send("no data found");
    }
    let index=mobiles.indexOf(delmobile);
    mobiles.splice(index,1);
    fs.writeFile("./products.json",JSON.stringify(mobiles),(err,data)=>{
        res.send("mobile deleted successfully");
    });
});

app.listen(5000,()=>{
    console.log("server runnig successfully");
})
