var hour = new Date().getHours()
hour = 19

if (hour == 19 ){
    document.write("Bine ai venit la curs!")
}

if (hour < 12 && hour >1) {
    document.write("Buna dimineata!")
} else if (hour >= 12 && hour < 18) {
    document.write("Buna ziua!")
} else if (hour >= 18 && hour <= 23) {
    document.write("Buna seara!")
} else {
    document.write("Somn usor!")
}

if (hour < 2) {
    document.write("Somn usor!")
}  else if (hour < 12) {
    document.write("Buna dimineata!")
} else if (hour < 18) {
    document.write("Buna ziua!")
} else {
    document.write("Buna seara!")
}