//Array

let fruit = "Mango";
console.log(fruit);
console.log(typeof(fruit));

let fruits = ["Mango", "Banana", "Apple", "Cherry"];
console.log(fruits);

//Access Elements
console.log(fruits[2]);
console.log(fruits[7]); // the return is undefined

//Lenght of the index
console.log(fruits.length);

//update element
fruits[1] = 'Avocado';
console.log(fruits);

// Adding elements
// Adding element at the end of the array.
fruits.push("Strawberry");
console.log(fruits);

// Add element at the beginning of the array
fruits.unshift("Banana");
console.log(fruits);

//Deleting elements
//Delete element at the end of the array
fruits.pop();
console.log(fruits);

//Delete element at the beginning of array
fruits.shift();
console.log(fruits);

//sorting
fruits.sort();
console.log(fruits);

// Reverse sort
fruits.reverse()
console.log(fruits);

//Searching - IndexOf method
let index = fruits.indexOf('Avocado');
console.log("Index:", fruits);

//Includes Method
console.log ("Is Apple in fruits:", fruits.includes("Apple"));

//Joining
//Joining Method
console.log("Joined fruits", fruits.join("-"));

// Slice Method
let sliced_fruits = fruits.slice(1, 3);
console.log(sliced_fruits);
console.log(fruits);

//splice Method
//let spliced_fruits = fruits.splice(1, 2);
//console.log(fruits);

// Looping through the element
//fruits.forEach(function(fruit){
//    console.log(fruit)
//})

// For loop
//for (let i = 0; i < fruits.length; i++) {
//    console.log(fruits[i]);
//}

// Reverse For Loop
for (let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}

// For Of Loop
for (fruit of fruits){
    console.log(fruit);
}










