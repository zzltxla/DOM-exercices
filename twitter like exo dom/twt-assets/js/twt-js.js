let textbox = document.querySelector('textarea');
let counterNb = document.querySelector('span');
let counter = 0;
let limit = 140;
// Var region ends here 

function counterEvent (){
    while (counter <= limit) {
        counterNb.classList.toggle("counterNumber");
        counter++;
        if (counter > limit) {

        }
    };
}
