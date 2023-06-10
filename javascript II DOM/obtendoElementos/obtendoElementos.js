function show() {
    const form = document.getElementById("form");
    console.log(form);

    const allDivs = document.getElementsByTagName("div");
    console.log(allDivs);

    const inputs = document.getElementsByClassName("inputs");
    console.log(inputs);

    const labels = document.querySelectorAll("#form > div > label");
    console.log(labels);

    const inputTest1 = document.getElementsByName("test1");
    console.log(inputTest1);
    
    const firstLabel = document.querySelector("#form > div > label");
    console.log(firstLabel);
}