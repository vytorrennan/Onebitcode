const input = [1, -4, 12, 0, -3, 29, -150];

sumPositive = input.filter(function (num) {
    return num > 0;
}).reduce(function (total, num, index) {
    return total + num;
}, 0);

console.log(sumPositive);