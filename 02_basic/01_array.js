const array = [0, 1, 2, 3, 4, 5, 6]
console.log(array);

array.push(70)//add an element
console.log(array);

array.pop()//remove the last element
console.log(array);

array.unshift(5)//add an element to the front
console.log(array);

array.shift()//remove the first element of the array
console.log(array);

const newArray = array.join()//this join method will return the string type of an array
console.log(array);
console.log(newArray);

//Slice & Splice
console.log("A", array);//Used to print the original array before using SLICE method

const myNew1 = array.slice(0, 4)

console.log(myNew1);//Used to print the SLICE array
console.log("B", array);//To check the original array is manipulated or not after SLICE method

const myNew2 = array.splice(1, 4)//Used to print the original array before using SPLICE method

console.log(myNew2);//Used to print the SPLICE array
console.log("C", array);//To check the original array is manipulated or not after SPLICE method

/* Slice does not manipulate the original array, 

Whereas Splice manippulate the original array */