let developers = Array();

const bntAddNewTechnologie = document.getElementById("bnt-add-technologie");
const form = document.querySelector('form[id="form"]');
const list = document.querySelector("ul");

form.addEventListener("submit", function (event) {
    event.preventDefault();
})

bntAddNewTechnologie.addEventListener("click", function () {
    const labelTechName = document.createElement("label");
    labelTechName.innerText = "Technologie's name:";
    const inputTechName = document.createElement("input");
    const labelExp = document.createElement("label");
    labelExp.innerText = "Years of experience:";
    labelExp.id = "exp";
    const inputExp02 = document.createElement("input");
    inputExp02.type = "radio";
    inputExp02.name = "exp";
    inputExp02.id = "0-2";
    const labelExp02 = document.createElement("label");
    labelExp02.innerText = "0-2";
    const inputExp34 = document.createElement("input");
    inputExp34.type = "radio";
    inputExp34.name = "exp";
    inputExp34.id = "3-4";
    const labelExp34 = document.createElement("label");
    labelExp34.innerText = "3-4";
    const inputExp5 = document.createElement("input");
    inputExp5.type = "radio";
    inputExp5.name = "exp";
    inputExp5.id = "5+";
    const labelExp5 = document.createElement("label");
    labelExp5.innerText = "5+";
    const bntSendInfo = document.createElement("button");
    bntSendInfo.innerText = "Send information";

    form.appendChild(labelTechName);
    form.appendChild(inputTechName);
    form.appendChild(labelExp);
    form.appendChild(inputExp02);
    form.appendChild(labelExp02)
    form.appendChild(inputExp34);
    form.appendChild(labelExp34)
    form.appendChild(inputExp5);
    form.appendChild(labelExp5);
    form.appendChild(bntSendInfo);

    bntSendInfo.addEventListener("click", function () {
        
        const devName = document.querySelector('input[name="name"]').value;
        let expChecked = ""
        document.querySelectorAll('input[name="exp"]:checked').forEach(function (element) {
            expChecked += element.id 
        });
        const techName = inputTechName.value;
        developers.push({ devName, expChecked, techName});

        const newLi = document.createElement("li");
        newLi.innerText = "Name: " + developers[developers.length - 1].devName + " | Experience: " + developers[developers.length - 1].expChecked + " | Technologie's name: " + developers[developers.length - 1].techName;
        list.appendChild(newLi);

        labelTechName.remove();
        inputTechName.remove();
        labelExp.remove();
        inputExp02.remove();
        labelExp02.remove();
        inputExp34.remove();
        labelExp34.remove();
        inputExp5.remove();
        labelExp5.remove();
        bntSendInfo.remove();
    })

})
