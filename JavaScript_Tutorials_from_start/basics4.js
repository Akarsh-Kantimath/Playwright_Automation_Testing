//Functions - a block of code wrapped them in a module for execution 

function add(a, b) {
    return a + b
}
let sum = add(2, 3);
console.log(sum);

//Anonymous function - function without the name, it is more of like function expressions
let sumOfIntegers = function(c,d){
    return c+ d
}
console.log(sumOfIntegers(6,7));

let sumOfNumbers = (c,d) => c + d
console.log(sumOfNumbers(4,5));

//let var const keyword difference with respect scope 

var greet = "Evening"
if ( 1 == 1){
    var greet = "Afternoon" //with var keyword within the block of if, it can be re-initialized. So, scope of it remain accessible to global/functional level
}
function toCheckGreet(){
    var greet = "Morning"
}
console.log("greet variable value is " + greet)

//---------------------------------------------------------------------------------------------------------------------
let greet1 = "Evening"
if ( 1 == 1){
    let greet1 = "Afternoon" //with let keyword within the block of if, it can't be re-initialized. So, scope of it remains in global/vlock level
}
function toCheckGreet(){
    let greet1 = "Morning"
}
console.log("greet1 variable value is " + greet1)

/* Final difference between let var const keywords

1. scope
var - scope of it exist in global/functional level
let - global/block level
const - only global level

2. re-decalration of variable
only with var key re-declaration is possible
with let key if tried throughs an error

3. re-initilization
with both let and var keyword - re-initilization of variable is possible.

4. with const keyword re-declare and re-initilize doesn't work.

*/
