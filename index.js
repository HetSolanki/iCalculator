let string = "";
let buttons = document.querySelectorAll("button");
let backspace = document.getElementById("Backspace");
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
        } else if (e.target == backspace){
            string = string.slice(0, string.length - 1);
            document.querySelector('input').value = string
        } else {
            string = string + e.target.innerHTML
            document.querySelector('input').value = string ;
        }
    })

})