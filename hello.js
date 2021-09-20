var time = 3000
time = time + 1000
var message = "Bine ai venit!"
var isLate = true

if (isLate) {
    alert("Go Home")
}

if (isLate) {
    alert("Go Home")
} else {
    alert("Continue")
}
setTimeout(welcome, time)

function welcome() {   
    alert(message)
    alert("Welcome!")
}
