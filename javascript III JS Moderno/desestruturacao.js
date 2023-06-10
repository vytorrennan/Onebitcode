// Arrays
const arr = ["Jonas", "Brothers", "Random", "lol"];
const [jonasVariavel, brothersVariavel] = arr;
console.log(jonasVariavel, brothersVariavel);

// Objects
const obj = {
    dick: "5 cm",
    balls: "oh nice",
    face: "Pretty"
}
const {dick, balls} = obj; // with objects the name of the variables need to be the same as the keys
console.log(dick, balls);

// Functions parameters
function consoleEveryName([ name1, name2, name3 ]) {
    console.log(name1);
    console.log(name2);
    console.log(name3);
}

consoleEveryName(arr);