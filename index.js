// part 5: Objects
// part 4: Dynamic nature of objects

circle = {
  radius: 1
};

circle.color = 'yellow';
circle.draw = function() {
  console.log(this.draw)
};
console.log(circle)
