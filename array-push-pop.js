const numbers=[1,2,3,4,5];
const ages=[]; //array can be undefined

console.log(numbers);

numbers.push(6); //Added the number 6 in the end of the array
numbers.push(7);
numbers.push(8,9,10) //we can add multiple elements at a time
console.log(numbers);

const friends=["Shawon","Srabon","Siyam","Sumi","Sopon"];
console.log(friends);
friends.push("Tasdid"); //Add string at the end of the array
console.log(friends);


friends.pop(); //It removes the last element of the array
console.log(friends);
friends.pop();

console.log(friends);


const number2=[10,11,12,13,14,15];
console.log(number2);
number2.shift(); //It removes the first element from the array

console.log(number2);

number2.unshift(50);// Add element on the first index of array
console.log(number2); 