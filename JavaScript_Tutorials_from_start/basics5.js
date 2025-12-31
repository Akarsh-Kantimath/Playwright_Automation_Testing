//Strings and it's methods in JS
let day = "tuesday "

//length of string
console.log(day.length);

//to get a sub-string 
let subDay = day.slice(0, 4);
console.log(subDay);

//to access the single character of string
console.log(day[1]);

//split a string into    tue    day
let splitDay = day.split("s")
console.log(splitDay[1]);

console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);


//to convert a string to number - parseInt()
let date = "23"
let nextDate = "28"
let diff = parseInt(nextDate) - parseInt(date);
console.log(diff);

//to convert integer to string
let checkString = diff.toString()
console.log(typeof (checkString));

//concatenate of strings
let newQuote = day + "is Funday"
console.log(newQuote);

//index of day in string
let val = newQuote.indexOf("day");
console.log(val);

//If we want next day index then
let val2 = newQuote.indexOf("day", 5) //It's like mentioning start search from 5th index
console.log(val2);

//How many times a string "day" is present in the "tuesday is Funday and goodday"
let newQuote1 = "tuesday is Funday and goodday"
let value = newQuote1.indexOf("day");
let count = 0;
while (value !== -1) {
    count++;
    value = newQuote1.indexOf("day", value + 1)

};
console.log(count);