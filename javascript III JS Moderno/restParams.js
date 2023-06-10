function sum(...numbers) {
    return numbers.reduce((total, nums) => total + nums, 0);
}

console.log(sum(2, 3, 4, 6, 8));
