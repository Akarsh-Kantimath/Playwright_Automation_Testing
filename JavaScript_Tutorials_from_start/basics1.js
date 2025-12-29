console.log("Hello World")

//these are comments
/*
erwei
ereire
ereu
*/

//declartion of variables - unlike in the Java, we need not define the data type, in JS in run-time based on the variables value data type is understood.
//So, we can decalre as
 var a = 4;

//In JS there are differnt versions - ES5, ES6, ES7, ES8 this are the differnt version of JS.
//till the ES5 engine there was only one variable data type that was var 
var b = 6;

//from ES6 engine let and const were introduced.
//----------------------------------------------------------- 
let aa = 4;
console.log(aa);

//to know what kind of variable it is
console.log(typeof(aa));

//In Javascript all the decimal values are also considered as number data type
let bb = 234.6
console.log(typeof(bb));

//creating a string variable
var c = "Rahul Shetty"
console.log(typeof(c));

//creating the boolan variable type
let required = true;
console.log(typeof(required));

/* There are total five data types used in the javascript */
/* number
string
boolean
null
undefined */

//Sum of two numbers
var c = aa + bb // let c = aa + bb ( it didn't work so, var is used )
console.log(c);

/* re-assigning and declaring differences
if we can have let d = 'abc' and 
in the next line if we try to redeclare let d = a + b  >> then let keyword displayed with error "Identifier 'd' has already been declared"

but, if we want to redeclare it we can use      var d 
instead, of      let d 
*/

/* Difference between var and let keyword
1. We cannot redeclare variable with let keyword but possible with var 
*/

// not operator  >> negation operator symbol ! is used for not operator
console.log(!required);

//with a let only reassign works 
let d = "Home";
d = aa +bb ;

/* with var keyword - reassign and redeclare both works
while 
with let keyword - only reassign works */

/* from ES6 engine let and const were introduced
with const keyword we cannot even reassign it. */






