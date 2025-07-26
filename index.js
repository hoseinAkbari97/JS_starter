// part 4: Control Flow
// section 15: Exercise: Count Truthy & Falsy Values
// Write a function that takes an array and counts the number of truthy and falsy values in it
// The falsy values are: false, null, undefined, 0, NaN, and ''

function countTruthy(array) {
    let count = 0;
    for (let value of array) {
        if (value) count++;
    }
    return count;
}
