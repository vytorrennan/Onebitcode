const input = [12, 46, 32, 64];


const median = input.reduce(function (median, num, index, array) {
    median += num;
    if (index === (array.length - 1)) {
        median = median / array.length;
    }
    return median;
}, 0);


input.sort(function (a, b) {
    return a - b;
})

let mean = 0;
let middle = Math.abs(input.length/2);
if (!(input.length % 2 == 0)){
    mean = input[middle];
} else {
    middle -= 1;
    mean = (input[middle] + input[middle+1])/2;
}


console.log(median);
console.log(mean);