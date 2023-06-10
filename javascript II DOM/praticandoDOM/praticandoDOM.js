function removeLastElement() {
    const list = document.getElementById("list")
    const allLi = document.getElementsByTagName("li");

    list.removeChild(allLi[allLi.length - 1]);
}