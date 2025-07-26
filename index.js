// part 4: Control Flow
// section 15: Exercise: Count Truthy & Falsy Values
// Write a function that takes an array and counts the number of truthy and falsy values in it
// The falsy values are: false, null, undefined, 0, NaN, and ''

const array = [0, null, undefined, '', NaN, false, 1, 'hello', true];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array) {
        if (value) count++;
    }
    return count;
}
