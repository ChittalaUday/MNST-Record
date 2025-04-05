const manufacturer=[{id:"Samsung",price:150},{id:"Nokia",price:200},{id:"Oppo",price:250},{id:"Realme",price:200}];
let test;
function MyFunction(){
    test=manufacturer.filter((x)=>x.price>=200)
}
MyFunction();
for(var item of test){
    console.log(item.id);
}
console.log("\nDeveloped by: 22MH1A0539");