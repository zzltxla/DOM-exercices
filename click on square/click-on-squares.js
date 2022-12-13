let square = document.getElementsByTagName('p');
let bg = document.getElementsByTagName('section');
let lol = "LOL !";
let no = "NO !";
let retry = "Play again !";
let what = "WHAT ?";
let counter = 1;
let guesses = 3;
let image = document.createElement('img');
image.src = 'https://media.tenor.com/CiJuhjUFaeIAAAAC/gojo-satoru-jujutsu-kaisen.gif';
    //var region ends here 

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
  console.log(random_hex_color_code());
    //color function region ends here

function RanNumber() {
    let number = Math. floor(Math. random() * (100-1 +1) + 1);
    return number;
}
    //Random Number function region ends here 

for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseenter", (event) => {
        square[i].style.backgroundColor = '#424242';
    });
    square[i].addEventListener("mouseleave", (event) => {
        square[i].style.backgroundColor = '#616161';
    });
            //mouse color interaction region ends here 

    square[i].onclick = function() {  
        square[i].style.backgroundColor = random_hex_color_code();
        console.log(i);
        if (i === 63 ) {
            bg[0].innerHTML = retry;
            bg[0].style.textAlign = 'center';
            bg[0].style.width = '1141px';
            bg[0].style.height = '1006px';
            bg[0].appendChild(image);
            setTimeout(function(){
                window.location.reload();       //reload page function
            }, 5000);
                //last case = section changes  + displays text

        } else if (i % 5 == 0) {
            square[i].style.backgroundColor = random_hex_color_code();
            square[i].innerHTML = no;
            square[i].style.textAlign = 'center';
            square[i].onclick() = function () {
                    counter++;    
                    if (counter < guesses) {
                        bg[0].innerHTML = 'Please Retry';
                        bg[0].style.width = '1141px';
                        bg[0].style.height = '1006px';
                    }
            }
                
                //if case i is dividible by 5, displays no and changes color 

        } else if (i % 3 == 0) {
            square[i].style.backgroundColor = random_hex_color_code();
            square[i].innerHTML = RanNumber();
            square[i].style.textAlign = 'center';
            let number = RanNumber();
                if (number == 42) {
                    bg[0].style.backgroundColor = '#546e7a';
                    bg[0].innerHTML = "Congrats ! You won :)";
                    bg[0].style.width = '1141px';
                    bg[0].style.height = '1006px';
                    bg[0].style.textAlign = "center";
                    setTimeout(function(){
                        window.location.reload();       //reload page function
                     }, 5000);
                    //if you find 42, user wins the game

                }
                //if case's i is dividible by 3, display a random number

        } else if (i % 7 == 0) {
            square[i].style.backgroundColor = random_hex_color_code();
            square[i].innerHTML = lol;
            square[i].style.textAlign = 'center';
            //if case's i is dividible by 7, case changes color and displays LOL

        } else if (i == [0]) {
            square[0].innerHTMl = what;
            square[0].style.textAlign = 'center';
                //first case will change color and display What 
        };
    };
}
