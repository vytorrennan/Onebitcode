function unionOfMatrixes(arr) {
    return arr.reduce((final, element) => {
        final.push(...element);
        return final;
    }, []).sort((a, b) => a-b);
}

console.log(unionOfMatrixes([[1, 5, 3], [6,19, 11], [47, 128, 5], [1, 93, 57, 42, 103]]));
console.log(unionOfMatrixes([[1, 3], [4, 8], [7, 5], [2, 6]]));
console.log(unionOfMatrixes([[], [], [], []]));
console.log(unionOfMatrixes([[100, 50], [60, 100], [20, 100, 70], [10, 40, 80, 90]]));