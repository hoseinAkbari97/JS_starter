// part 4: Control Flow
// section 1: For...in

// Defining an object and its properties
const person = {
    name: 'Hossein',
    age: 28
};

// Iterating through the person's properties
for (let key in person)
    console.log(key, person[key]);
