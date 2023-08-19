//var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//var newNum = numbers.map((ele) => ele * 2);
//console.log(newNum);

//Filter - Create a new array by keeping the items that return true.
//var newN = numbers.filter((ele) => ele > 20);
//console.log(newN);
//Reduce - Accumulate a value by doing something to each item in an array.

//var newnum = numbers.reduce((ele, el) => ele + el);
//console.log(newnum);
//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
import emojipedia from "./emojipedia";

var meaning = emojipedia.map((ele) => ele.meaning);
var str = meaning.map((ele) => ele.substring(0, 100));
console.log(str[2]);
