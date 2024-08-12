import {sum, subtract} from './math.js';
let actual, result;

actual = 5;
result = sum(2, 3);


// actual!==expected is an assertion, if assertion is false then we throw error
if(actual!==result){
    throw new Error(`${actual} is not equal to ${result}`);  
}

actual = 1;
result = subtract(3, 2);

if(actual!==result){
    throw new Error(`${actual} is not equal to ${result}`);  
}