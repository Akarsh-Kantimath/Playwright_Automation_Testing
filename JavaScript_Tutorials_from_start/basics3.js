//Arrays and its methods with detailed examples

//Array is a collection of element ex. store them in a container

var marks = Array(6); //Initilization of the array

//We are re-declaring the marks so, var marks
var marks = new Array(20, 40, 60, 80, 90, 100);

//shortcut of declaring a array
var marks = [15, 20, 56, 86, 45, 96];
console.log(marks[2]);

marks[3] = 48;
console.log(marks);

//count the length of the array
console.log(marks.length);

//We want to add one more element to the array and it gets added at the end
marks.push(65);
console.log(marks);

//To remove the last element from the array
marks.pop();
console.log(marks);

//when we want to add element in the beginning of an array
marks.unshift(12);
console.log(marks);

//What is the index of element
console.log(marks.indexOf(45));

//To search the element is present in the array or not
console.log(marks.includes(120));

//To create sub-array from the main array, we going to use the slice(indexIntial, indexEnding + 1 )
subMarks = marks.slice(2,6)
console.log(subMarks);

//Iterate through the array
for (let i = 0; i < marks.length; i++){
    console.log(marks[i]);
}

//Sum of the array elements
var sum = 0;
for(let j = 0; j < marks.length; j++){
    sum = sum + marks[j];
}
console.log(sum);

//reduce filter map
//Array exposes three powerful functions to reduce the code complexity - Reduce, Filter and Map

//reduce - to sum all the elements of the array
let totalMarks = marks.reduce((sum,mark)=> sum+mark, 0);
console.log(totalMarks);

//Create new array with even numbers of scores array [12, 14, 16]
var scores = [23, 12, 15, 14, 16];
var evenScores = [];
for(let i = 0; i < scores.length; i++){
    if(scores[i] % 2 == 0){
        evenScores.push(scores[i]);
    }
}
console.log(evenScores);

//filter - when we try to filter an array based on the condition, we use filter function
let newFilterEvenScores = scores.filter(score => score % 2 == 0)
console.log(newFilterEvenScores);

/* when to use reduce and filter methods
reduce - when we accomulate the value through each iteration use reduce()
filter - when we want to filter an array based on some conditions use filter()
*/

//map function - It modifys each value of array to new value.

//Multiple each value of array by 3
let mappedArray = newFilterEvenScores.map(score => score * 3);
console.log(mappedArray);

//Now sum the new values of array
let totalVal= mappedArray.reduce((sum, val)=> sum + val , 0)
console.log(totalVal);

//Programe to filter the even numbers in the array, multiply them to 3 and sum the numbers
var scores1 = [12, 15, 27, 16, 26];
var evenScores1 = [];
for(let i = 0; i < scores1.length; i++){
    if(scores1[i] % 2 == 0){
        evenScores1.push(scores1[i]);
    }
}
console.log("*****************");
console.log(evenScores1);

var multiplyByThree = [];
for(let j = 0; j < evenScores1.length ; j++){
    multiplyByThree.push(evenScores1[j] * 3);
}
console.log(multiplyByThree);
var sum1 = 0;
for(let k = 0; k < multiplyByThree.length; k++){
    sum1 = sum1 + multiplyByThree[k];
}
console.log(sum1);

//Using filter, map and reduce array function
var endResult =scores1.filter(score => score % 2 == 0).map(score => score * 3).reduce((sum, val)=> sum+val, 0)
console.log(endResult);

/*
Sorting 
There are two sorting logic 1. for numbers  2. for strings
*/

//Sorting of the strings 
let fruits = ["banana", "mango", "pomegranate", "apple"]
fruits.sort(); //for ascending order
console.log(fruits); 
fruits.reverse(); //for descending order
console.log(fruits);

//Sorting of the numberws with custom logic
var scores1 = [12, 003, 19, 16, 14]
// scores1.sort(function(a,b){
//     return a - b
// })
// console.log(scores1);

scores1.sort((a,b) => a - b); //for ascending order
console.log(scores1);
scores1.sort((a,b) => b - a ); //for descending order
console.log(scores1);

