let string = "";
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', (e)=> {
        if (e.target.innerHTML == "=") {
            string = string.replace("x", "*");
            string = string.replace("÷", "/");
            string = string.replace("%", "/100");
            document.querySelector('input').value = eval(string);
            string = document.querySelector('input').value
        } else if (e.target.innerHTML == "AC"){
            string = "";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == "%") {
            string = string + e.target.innerHTML
            document.querySelector('input').value = string ;
            string = string + "x";
        } else {
            string = string + e.target.innerHTML
            document.querySelector('input').value = string ;
        }
    })

})