let tokyo = document.querySelector("#tokyo");
let paris = document.querySelector("#paris");
let london = document.querySelector("#london");
let newText = document.querySelector("p");
const tokyoText = "Tokyo is the capital of Japan !";
const parisText = "Paris is the capital of France !";
const londonText = "London is the capital of England !";
//var region ends here 


tokyo.addEventListener('click', function(){
    newText.innerHTML = tokyoText;
});
paris.addEventListener('click', function(){
    newText.innerHTML = parisText;
});
london.addEventListener('click', function(){
    newText.innerHTML = londonText;
});