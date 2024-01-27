const number=[1,2,3,4,5];
console.log(number.includes(3)); //If the element presents on the array return true either false
console.log(number.includes(10));

if(number.includes(1)){
    console.log("yeah! We got it.")
}

const number2=[10,11,121,13];
console.log(number2.indexOf(10)); //Find index for any element

//If returns -1 that means the element not present on the array

const nums=[];
const food="S H A W O N";

console.log(Array.isArray(food)); //Check is it array?
console.log(Array.isArray(nums)); //Check is it array?


const myArray=[100,200,300,400,500];
console.log(myArray.join()); //Join means represents the array with a comma
console.log(myArray.join("+")); //Array elements separated with a plus symbol

const array1=[1,3,5,7,9];
const array2=[10,30,50,70,90];

let mergedArray=array1.concat(array2); //Merge two arrays;

console.log(mergedArray);

console.log(array1.slice(2,4)); //place element from index 2 to index 3 others were removed
//when one number then removes before it.
console.log(array2.slice(2)); //Removes before of index 2