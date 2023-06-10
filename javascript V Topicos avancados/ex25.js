async function calculateIMC(weight, height) {
    if (typeof weight == "number" && typeof height == "number") {
        const IMC = weight / (height * height);
        return IMC
    } else {
        return Promise.reject("One of the parameters is not a number!");
    }
}

async function showIMC(weight, height) {
    try {
        console.log("Executing program...");
        const result = await calculateIMC(weight, height);
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
    } catch (error) {
        console.log(`${error}`);
    }
    
}

Promise.all([
    showIMC(67, 1.75),
    showIMC(67, "1.75"),
    showIMC(67),
    showIMC(70, 1.75)
])
