// part 5: Objects
// part 6: Functions are objects

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

const Circle1 = new Function ('radius', `
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
  `);

const circle = new Circle1(1);

const another = new Circle1(1);
