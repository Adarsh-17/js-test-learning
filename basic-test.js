import {sum, subtract} from './math.js';
import assert from "assert";

let actual, result;

actual = 5;
result = sum(2, 3);


// actual!==expected is an assertion, if assertion is false then we throw error
assert.strictEqual(actual, result);

actual = 1;
result = subtract(3, 2);

assert.strictEqual(actual, result);
//for assert error message is not that informational

