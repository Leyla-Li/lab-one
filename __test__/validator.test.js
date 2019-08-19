'use strict';

const validator = require('../validator');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  let str = 'yes';
  let num = 1;
  let arr = ['a'];
  let obj = {x:'y'};
  let func = () => {};
  let bool = false;
  let negativeNum = -1;
  let positiveNum = 1;
  let zero = 0;  

  it('strings', () => {
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    expect(validator.isNumber(negativeNum)).toBeTruthy();
    expect(validator.isNumber(positiveNum)).toBeTruthy();
    expect(validator.isNumber(zero)).toBeTruthy();
    expect(validator.isNumber(arr)).toBeFalsy();
    expect(validator.isNumber(obj)).toBeFalsy();
    expect(validator.isNumber(func)).toBeFalsy();
    expect(validator.isNumber(bool)).toBeFalsy();
  });

  it('arrays', () => {
    expect(validator.isArray(negativeNum)).toBeFalsy();
    expect(validator.isArray(positiveNum)).toBeFalsy();
    expect(validator.isArray(zero)).toBeFalsy();
    expect(validator.isArray(arr)).toBeTruthy();
    expect(validator.isArray(obj)).toBeFalsy();
    expect(validator.isArray(func)).toBeFalsy();
    expect(validator.isArray(bool)).toBeFalsy();
  });

  it('objects', () => {
    expect(validator.isObject(negativeNum)).toBeFalsy();
    expect(validator.isObject(positiveNum)).toBeFalsy();
    expect(validator.isObject(arr)).toBeTruthy();
    expect(validator.isObject(obj)).toBeTruthy();
    expect(validator.isObject(func)).toBeFalsy();
    expect(validator.isObject(bool)).toBeFalsy();
  });

  it('numeric rule', () =>{
    let rule1 = 'negative';
    let rule2 = 'positive';
    let rule3 = 'zero'
    expect(validator.notZero(negativeNum,rule1)).toBeTruthy();
    expect(validator.notZero(positiveNum,rule1)).toBeFalsy();
    expect(validator.notZero(negativeNum,rule2)).toBeFalsy();
    expect(validator.notZero(positiveNum,rule2)).toBeTruthy();
    expect(validator.notZero(positiveNum,rule3)).toBeFalsy();
    expect(validator.notZero(zero,rule1)).toBeFalsy();
    expect(validator.notZero(zero,rule2)).toBeFalsy();
    expect(validator.notZero(zero,rule3)).toBeFalsy();
  }

  );

//   it('booleans', () => {
//     expect(true).toBeFalsy();
//   });

//   it('functions', () => {
//     expect(true).toBeFalsy();
//   });

});

describe('validator module performs complex validations', () => {

  it('validates the presence of required object properties at any level', () => {
    //does a person has a property and its key is hair
    let propertyName = 'hair';
    let person1 = {hair:true}; 
    let person2 = {mouth:'big'};  
    expect(validator.hasProperty(person1,propertyName)).toBeTruthy();
    expect(validator.hasProperty(person2,propertyName)).toBeFalsy();
  });

//   it('validates the proper types of object properties', () => {
//     // i.e. person.name must be a string, etc.
//     expect(true).toBeFalsy();
//   });

//   it('validates the types of values contained in an array', () => {
//     // i.e. an array of all strings or numbers
//     expect(true).toBeFalsy();
//   });

//   it('validates a value array against an approved list', () => {
//     // i.e. a string might only be allowed to be "yes" or "no"
//     expect(true).toBeFalsy();
//   });

  // TODO: Cover so, so many more cases

});
