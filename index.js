'use strict'

const validator = require('./validator');

console.log('Test to see if the input is a number');
console.log(validator.isNumber(1));
console.log(validator.isNumber(-1));
console.log(validator.isNumber(0));
console.log(validator.isNumber('hello'));
console.log('Test to see if the input is a object');
console.log(validator.isObject({hello:1}));
console.log(validator.isObject(1));
console.log('Test to see if the input is an array');
console.log(validator.isArray([0]));
console.log(validator.isObject(1));
console.log('Test to see if the object input has the specific property');
console.log(validator.hasProperty({hair:true}));
console.log(validator.hasProperty({mouth:'big'}));