function listCouontrie(country) {
    const li = document.createElement("li")
    const countryName = document.createElement("p")
    countryName.innerText = country.name.common;
    const image = document.createElement("img");
    image.src = country.flags.svg;
    image.width = "50";


    li.append(countryName, image);
    document.getElementById("list").append(li);
}

async function getCouontries() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();

    countries.forEach(element => {
        listCouontrie(element);
    });
}

getCouontries();