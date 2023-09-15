console.groupCollapsed('Exercise 2');

//Destructure the person object to extract the name and age properties into variables.
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

let {name, age} = person;

console.log(name);//John
console.log(age);//30

//Extract the city and country properties from the address object nested within the person object using nested destructuring.
let {address: {city, country}} = person;

console.log(city);//New York
console.log(country);//USA

//Use array destructuring to get the second and fourth items from the fruits array.
const fruits = ['apple', 'banana', 'cherry', 'date'];

const [,x,,z] = fruits;

console.log(x);//banana
console.log(z);//date

console.groupEnd();