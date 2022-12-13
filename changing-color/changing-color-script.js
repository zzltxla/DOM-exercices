let square = document.getElementsById('box');
let toggle = document.getElementById('button');
    //var region ends here

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
  console.log(random_hex_color_code());
    //color function in hex code, region ends here



    for (let i = 0; i < square.length; i++) {   //hover color effect
        square[i].addEventListener("mouseenter", (event) => {
            square[i].style.backgroundColor = random_hex_color_code();
        });
        square[i].addEventListener("mouseleave", (event) => {
            square[i].style.backgroundColor = random_hex_color_code();
        });
        
    }