const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const body = document.querySelector("body");
let css = document.querySelector("p");

function changeBackground(){
    body.style.background = "linear-gradient(to right," + input1.value + ", " + input2.value + ")";

    css.textContent = body.style.background + ";";
}

input1.addEventListener("input", changeBackground);

input2.addEventListener("input", changeBackground);
