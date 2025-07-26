// part 4: Control Flow
// section 16: String Properties

const movie = {
  title: 'Inception',
  year: 2010,
  director: 'Christopher Nolan'};

showProperties(movie);

function showProperties(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'string') 
    console.log(prop + ': ' + obj[prop]);
  }
}
