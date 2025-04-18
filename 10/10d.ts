interface Greet{
    (name:string):string;
}
const sayHello: Greet=function(name:string):string{
    return "Hello, "+name+"!";
};
const message=sayHello("Smily");
console.log(message);
console.log("\nDeveloped by: 23MH5A0505");
//console.log("Developed by: 22MH1A0536");