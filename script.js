const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const gradientButton = document.getElementById('gradient-button');
const box = document.getElementById("box");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let code = document.getElementById("code");


gradientButton.addEventListener('click', () => {
      const color1 = input1.value;
      const color2 = input2.value;
      box.style.background = "linear-gradient(to right," + input1.value + ", " + input2.value + ")";
      text1.textContent = "Your Background is";
      text2.textContent = "The code for the selected background is:";
      code.textContent = box.style.background + ";";
      box.style.display = 'block';
});
