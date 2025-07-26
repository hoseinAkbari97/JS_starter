// part 4: Control Flow
// section 14: Exercise: Even & Odd Numbers

showNumbers(10);
// Write a function that takes a limit and displays all even and odd numbers up to that limit

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}
