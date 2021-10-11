var a = 10;
// a este variabila globala

function multiply2(a) {
    // a este variabila locala pt ca este definita ca parametru
   a *= 2 
   console.log(a)
}

function multiply3(b) {
    // a este variabila globala de sus pt ca nu este definita ca parametru
    a *= 3
    console.log(a)
}

function multiply4(x) {
    // a este locala
    let a = 50
    a *= 4
    console.log(a)
}

function defineVars() {
    var c = 123
    let d = 321
}

do {
// e este o variabila locala 
// pt ca este definita in bucla
    let e = 10 
    // f este o variabila globala
    var f = 33
} while (false) 

console.log(f)
// console.log(e)

if (true) {
    let g = 77
    var h = 88
}

// console.log(g)
// g nu se afiseaza pt ca este o variabila locala
console.log(h)


// apeleaza functiile de mai sus
multiply2(50)
multiply3(5)
multiply4(1)
defineVars()

// console.log(c)
// variabila c nu este vizibila si da eroare,
// fiind o variabila locala

console.log(a)