function calculateIMC(weight, height) {
    return new Promise((resolve, reject) => {
        if (typeof weight == "number" && typeof height == "number") {
            const IMC = weight / (height * height);
            resolve(IMC);
        } else {
            reject("One of the parameters is not a number!");
        }
    })
}

function showIMC(weight, height) {
    calculateIMC(weight, height).then((result) => {
        console.log(`IMC: ${Math.round(result)}`);
        if (result < 18.5) {
            console.log("underweight");
        } else if (result < 25) {
            console.log("healthy weight");
        } else if (result < 30) {
            console.log("overweight");
        } else if (result < 40) {
            console.log("obesity");
        } else {
            console.log("severe obesity");
        }
    }).catch((result) => {
        console.log(`${result}`);
    });
    console.log("Executing program...");
}


showIMC(67, 1.75);
showIMC(67, "1.75");
showIMC(67);
showIMC(70, 1.75);
