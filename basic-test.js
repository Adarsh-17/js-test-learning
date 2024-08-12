import {sum, subtract} from './math.js';
import assert from "assert";


test("sum adds numbers", ()=>{
    const expected = 5;
    const result = sum(2, 3);
    expect(result).toBe(expected);
})

test("subtract subtracts numbers", () => {
    const expected = 1;
    const result = subtract(3, 2);
    expect(result).toBe(expected);
})

function expect(result){
    return {
        toBe(expected){
            if(result !== expected){
                throw new Error(`${result} is not equal to ${expected}`)
            }
        }
    }
}


function test(title, callback){
    try{
        callback();
        console.log(`✓ ${title}`);
    }
    catch(error){
        console.error(`✕ ${title}`)
		console.error(error)
    }
}
