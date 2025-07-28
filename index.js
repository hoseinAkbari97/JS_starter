// part 4: Control Flow
// section 17: Sum of multiples of 3 and 5

console.log(sum(10));

function sum(limit) {
  let answer = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3===0 || i % 5=== 0) {
      answer += i;
    }
  }
  
  return answer;
}
