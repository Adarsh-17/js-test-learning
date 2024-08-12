const actual = true;
const expected = false;


// actual!==expected is an assertion, if assertion is false then we throw error
if(actual!==expected){
    throw new Error(`${actual} is not ${expected}`);  
}