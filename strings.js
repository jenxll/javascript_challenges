/*1) Use startsWith and endsWith methods on the provided string, and have them both return as true:
const string = "Why are we here???"; */

const string = "Why are we here???";

console.log(string.startsWith("W"));

console.log(string.endsWith("?"));

/* 2) Use slice to return from the "g" all the way to the end of the following sentence:
const str = "The practitioners grappled on the road side!";
// output: "grappled on the road side!" */

const str = "The practitioners grappled on the road side!";

console.log(str.slice(18));

/*3) Check if a given input is a string and return a boolean value
ex: isString("ryan") => true
ex: isString(12) => false */

const isWeekend = true;

let needTodoDishes = !isWeekend;

console.log(needTodoDishes);

/*4) Capitalize the first letter in a given string:
ex: "ryan" => "Ryan" */
/*6) Given 2 strings, join them by a space
ex: "hi","there" => "hi there"
*/

let sillyString = "hElLo There, hOW ARe You doing?";

let lowerString = sillyString.toLowerCase();
let firstChar = lowerString[0];
let firtCharCap = firstChar.toUpperCase();
let restOfString = lowerString.slice(1);

console.log(firtCharCap + restOfString);

/* 5) Given 2 numbers, return the largest:
ex: largestNum(1, 2) => 2
ex: largestNum(2, 2) => 2 (up to you how to handle that) */

let largestNum = function (nums) {
  if (nums <= 30) {
    return "Big Number";
  }
  if ((nums) => 10) {
    return "Small Number";
  }
};
console.log(largestNum(10, 2));
