let name1 = prompt("Ismingizni kiriting!")
let letter = prompt("Istagan harfni kiriting!")

let check = name1.toLowerCase().includes(letter.toLowerCase());

if (check) {
    alert("Siz kirtgan " + letter + "harf mavjud")
} else (
    alert("Siz kiritgan " + letter + "harf mavjud emas")
)