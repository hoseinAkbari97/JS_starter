// part 5: Objects
// part 6: Functions are objects

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

Circle.call({}, 1);
Circle.apply({}, [1]);

const another = new Circle1(1);
