var numberOfBubbles = 50
// pentru a face 10 bule
for (let i = 0; i < numberOfBubbles; i++) {
    newBubble() 
}
function newBubble() {
    let bubble = document.createElement("div")
    bubble.classList.add("bubble")
    let x = randomNumber(100)
    // variabila pt delay-ul bulelor
    let delay = randomNumber(3000)
    bubble.style.left = x + "vw"
    bubble.style.animationDelay = delay + "ms"
    // adaugam un copil in body - adica o bula => appendChild
    document.querySelector("body").appendChild(bubble)
}
// functie de a genera random niste numere, obiecte, cercuri, etc
function randomNumber(max) {
    return Math.floor(Math.random() * max)
}