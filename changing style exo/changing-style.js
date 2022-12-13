let button = document.querySelector('button');
let text = document.querySelector('div');
//Var region ends here

button.addEventListener("click", click);

function click(){
text.classList.toggle('text');
}
