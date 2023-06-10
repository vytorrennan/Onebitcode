function reverseWordByWord(str) {
    return str.split(" ").map(element => element.split("").reverse().join("")).join(" ");
}

console.log(reverseWordByWord("Lorem ipsum dolore sec avanti"));
console.log(reverseWordByWord("This is an apple"));
console.log(reverseWordByWord("May the force be with you"));
console.log(reverseWordByWord("It s over nine thousand"));
