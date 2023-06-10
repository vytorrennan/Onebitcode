let arr = ["a", "b", "c", "d", "e"];
arr.forEach(function (letter, index){   // the order for the foreach is element, index and array
    console.log("Letter: " + letter + "\nIndex: " + index);
});

// create a new array with new elements based on another array's alements
let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map(function(singleNum) {
    return singleNum**2;
})
console.log(squaredNumbers);


// create a new array with some of the same elements from another array without altering them (it does not execute for empty elements)
let ages = [32, 33, 16, 40];
let aboveEighteen = ages.filter(function (age) {
    return age > 18;
});
console.log(aboveEighteen);


// reduce and sort

// Object, Array, String, Number, Date, Math
// Math.random
// Math.round
// String(42)
// Number("42")
// Number.isInteger
// Data()
// a = Array(2, 4, 5)
// b = Object()