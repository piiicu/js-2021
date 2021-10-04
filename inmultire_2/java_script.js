/*for (let i = 0; i < 10; i++) {
    let j = 1
    let produs = i * j
    document.write(i + "*" + j "=" + produs)
    document.getElementById(unu).innerHTML = produs
}*/


for (let j = 1; j < 2; j++) {
    for (let i = 0; i < 10; i++) {
        let produs = i * j
        document.write(i + " x " + j + " = " + produs + "<br>")
    }
    document.write("<br>")
}
document.getElementById("unu").innerHTML = j

for (let j = 1; j < 3; j++) {
    for (let i = 0; i < 10; i++) {
        let produs = i * j
        document.write(i + " x " + j + " = " + produs + "<br>")
    }
    document.write("<br>")
}
document.getElementById("doi").innerHTML = j