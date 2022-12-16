let button = document.querySelector("button");
let rectangle = document.querySelector("#rectangle");
let topLine = document.querySelector("#topline");
let bottomLine = document.querySelector("#bottomline");
let middleLine = document.querySelector("#middleline");

//var region ends here



function menuBurger() {
    button.classList.toggle("openButton");
    rectangle.classList.toggle("open");
    console.log(rectangle.className)
    if (rectangle.className === "open") {
        topLine.classList.remove("topLineAnimationOut");
        middleLine.classList.remove("middleLineAnimationOut");
        bottomLine.classList.remove("bottomLineAnimationOut");

        topLine.classList.add("topLineAnimation");
        middleLine.classList.add("middleLineAnimation");
        bottomLine.classList.add("bottomLineAnimation");
    } else {
        topLine.classList.remove("topLineAnimation");
        middleLine.classList.remove("middleLineAnimation");
        bottomLine.classList.remove("bottomLineAnimation");

        topLine.classList.add("topLineAnimationOut");
        middleLine.classList.add("middleLineAnimationOut");
        bottomLine.classList.add("bottomLineAnimationOut");
    }

};

button.addEventListener('click', menuBurger);