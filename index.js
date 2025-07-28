// part 4: Control Flow
// section 20: Prime Numbers

showPrimes(100);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) 
    if (isPrime(number)) console.log(number);
}
  
  
  function isPrime(number) {
    for (let factor = 2; factor < number; factor++) 
      if (number % factor === 0)
        return false;

    return true;
  }
  