function greet() {
    console.log('Hello from a named function!');
  }
  greet();
  
  function add(a, b) {
    console.log(`Sum: ${a + b}`);
  }
  add(5, 10);
  
  function multiply(x, y) {
    return x * y;
  }
  const result = multiply(4, 3);
  console.log('Multiplication:', result);
  
  const divide = (a, b) => a / b;
  console.log('Division:', divide(10, 2));
  
  const greetUser = (name) => {
    console.log(`Welcome, ${name}!`);
  };
  greetUser('Nikhil');
  
  function square(num){
    return num*num;
  }
  console.log("Square value of 5 is: ",square(5));