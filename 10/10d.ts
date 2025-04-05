interface Greet{
    (name:string):string;
}
const sayHello: Greet=function(name:string):string{
    return "Hello, "+name+"!";
};
const message=sayHello("Smily");
console.log(message);
console.log("\nDesigned by: 22MH1A0539");
