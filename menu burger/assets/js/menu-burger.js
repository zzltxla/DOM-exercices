let button = document.querySelector("button");
let rectangle = document.querySelector("#rectangle");
let topLine = document.querySelector("#topline");
let bottomLine = document.querySelector("#bottomline");
let middleLine = document.querySelector("#middleline");

//var region ends here

function menuBurger() {
    rectangle.classList.toggle("open");
    button.classList.toggle("openButton");
};

button.addEventListener('click', menuBurger);



/*else if (counter == 2) {
    middleLine.classList.remove('middleLineAnimationOut');
    bottomLine.classList.remove("bottomLineAnimationOut");
    topLine.classList.remove("topLineAnimationOut");
    rectangle.classList.remove("animationOut");
    button.classList.remove("buttonAnimationOut");

    console.log(rectangle.className);

    middleLine.classList.add("middleLineAnimation");
    bottomLine.classList.add("bottomLineAnimation");
    topLine.classList.add("topLineAnimation");
    rectangle.classList.add("animation");
    button.classList.add("buttonAnimation");
}*/