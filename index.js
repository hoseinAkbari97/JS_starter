// part 4: Control Flow
// section 12: Exercise3-FizzBuzz

//  Divisible by 3 ==>  Fizz
//  Divisible by 5 ==>  Buzz
// divisible by both 3 and 5 ==> FizzBuzz
//  Not divisible by 3 or 5 ==>  input
//  Not a number ==> 'Not a number'

const output = FizzBuzz(45)
console.log(output)

function FizzBuzz(input)    {
    if (typeof input !== 'number')
        return  'Not a number!';

    if (input % 15 === 0)
        return  'FizzBuzz';
    
    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)    
        return 'Buzz';

    return input
}
