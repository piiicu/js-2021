var numberOfBubbles = 10;
// pentru a face 10 bule
for (let i = 0; i < numberOfBubbles; i++) {
  newBubble();
}
function newBubble() {
  let bubble = document.createElement("div");
  bubble.classList.add("bubble");
  let x = randomNumber(100);
  // variabila pt delay-ul bulelor
  let delay = randomNumber(3000);
  // variabila pt culorile bulelor...aleatoriu
  let red = randomNumber(255);
  let green = randomNumber(255);
  let blue = randomNumber(255);
  let size = randomNumber(4) + 1;
  bubble.style.left = x + "vw";
  //  sau cu interpolare: bubble.style.left = `${x}vw`
  bubble.style.animationDelay = `${delay}ms`;
  bubble.style.borderColor = "rgb(" + red + "," + green + "," + blue + ")";
  // cu interpolare: bubble.style.borderColor = `rgb(${red},${green},${blue})`
  bubble.style.height = `${size}em`;
  bubble.style.width = `${size}em`;
  //  sau bubble.style.height = bubble.style.width = `${size}em`....pentru ca sunt egale
  // adaugam un copil in body - adica o bula => appendChild
  document.querySelector("body").appendChild(bubble);
}
// functie de a genera random niste numere, obiecte, cercuri, etc
function randomNumber(max) {
  return Math.floor(Math.random() * max);
}
