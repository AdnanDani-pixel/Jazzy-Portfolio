// document.getElementById('generateBtn').addEventListener('click', setGradient);

// function setGradient() {
//     const color1 = document.getElementById('color1').value;
//     const color2 = document.getElementById('color2').value;
//     const body = document.body;
//     const cssCode = document.getElementById('cssCode');

//     const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
//     body.style.background = gradient;
//     cssCode.textContent = gradient;
// }

// // Set initial gradient on page load
// window.onload = setGradient;

document.getElementById('generateBtn').addEventListener('click', setGradient);

function setGradient (){
   const color1 = document.getElementById('color1').value;
   const color2 = document.getElementById('color2').value;
   const color3 = document.getElementById('color3').value;

   const body = document.body

   const cssCode = document.getElementById('cssCode');
   const gradient = ` linear-gradient( to top , ${color1}, ${color2}, ${color3})`;
   body.style.background = gradient;
   cssCode.textContent=gradient;
}
window.onload= setGradient;
