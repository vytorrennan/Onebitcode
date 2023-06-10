function biggestLetter(str) {
    let biggest = str[0];
    for (let i=0;i<str.length;i++) {
        if (str[i] > biggest) {
            biggest = str[i];
        }
    }
    return biggest;
}

console.log(biggestLetter("Lorem ipsum dolare sec avanti"));
console.log(biggestLetter("Hello"));
console.log(biggestLetter("May the force be with you"));
console.log(biggestLetter("its over nine thousand"));