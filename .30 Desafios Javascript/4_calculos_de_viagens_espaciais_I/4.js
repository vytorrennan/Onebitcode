function calculus(num) {
    let arr = num.toString().split("").map(element => parseFloat(element)*parseFloat(element)).join("");
    console.log(arr);
}

calculus(3514);
calculus(94571);
calculus(24);
calculus(745821698);