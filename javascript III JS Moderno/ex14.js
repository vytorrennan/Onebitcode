function average(...numbers) {
    return numbers.reduce((total, num) => total + num) / numbers.length;
}

console.log(average(2, 6, 3, 7, 4));

function ponderatedAverage(...numbers) { 
    return numbers.reduce((total, { n, p }) => total += n * (p ?? 1), 0) / numbers.reduce((total, { n, p}) => total += (p ?? 1), 0);
}

console.log(ponderatedAverage({n:7, p:2}, {n:9, p:5}, {n:3, p:1}));

function median(...numbers) {
    return numbers.length % 2 == 0 ? (numbers[Math.floor((numbers.length - 1)/2)] + numbers[Math.floor((numbers.length - 1)/2) + 1])/2 : numbers[(numbers.length - 1)/2];
}

console.log(median(2, 4, 5, 7, 42, 99));
console.log(median(15, 14, 8, 7, 3));

function moda(...numbers) {
    let mostAppeard = [0];
    let numTimesAppeard = 0;

    for (let i=0;i<numbers.length;i++) {
        for (let j=0;j<numbers.length;j++) {
            if (numbers[i] === numbers[j]) {
                numTimesAppeard++;
            }
        }
        if (numTimesAppeard >= mostAppeard[0]) {
            mostAppeard[0] = numTimesAppeard;
            mostAppeard[1] = numbers[i];
        }
    }

    return mostAppeard[1];
}

console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));
