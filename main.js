let name = prompt("Ismingizni kriting");
let later = prompt("Birorta harf kriting").toLocaleLowerCase() .toUpperCase()
let test = name.includes(later);

if (test) {
    alert(name + " ismingiz ichida " + later + " harf mavjut")
}
else {
    alert(name + " ismingiz ichida " + later + " harf mavjut emas")
}