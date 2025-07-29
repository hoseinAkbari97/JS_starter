// part 5: Objects
// part 2: Factory Functions

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('Draw')
    }
  };
}

circle1 = createCircle(2);
console.log(circle1);
