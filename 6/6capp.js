const express=require('express');
const app=express();
const greetUser = require('./6cindex');
const calculator = require('./6ctester');

console.log('--- Modular Programming Demo ---');

const name = 'Alice';
console.log(greetUser(name)); 

const a = 5, b = 3;
console.log(`Addition of ${a} and ${b} is:`, calculator.add(a, b));      
console.log(`Multiplication of ${a} and ${b} is:`, calculator.multiply(a, b));
