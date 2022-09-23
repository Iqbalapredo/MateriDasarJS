function printNama(nama){
    console.log("Halo" + nama);
}
printNama("Taufik");

const tambah = function(a, b){
    console.log(a + b);
    return a+b;
}

tambah(3,5);
let hasilTambah = tambah(9,9);
console.log(hasilTambah);

const addition = (c, d) => {
    console.log(c + d);
};
addition(7,4);

const cobaReturn = () => {
    console.log("pesan 1 berhasil");
    return;
};
cobaReturn();

const kodeRahasia = (num) => {
    if (num !== 5) {
        console.log("kode rahasia salah");
        return "Error";
    } 
    console.log("kode rahasia benar");
}

kodeRahasia(4);
bisaDipanggil();
function bisaDipanggil() {
    console.log("bisa dipanggil");
}
const anotherDoStuff = function() {
    console.log("hello world");
}

// Method
const objMath = {
    angkaDefault: 100,
    tambah: function(angka1, angka2) {
        console.log(angka1 + angka2);
        return;
    },
    kurang: (angka1, angka2) => angka1+angka2,
    kurangV2: (angka1, angka2) => {
        return angka1 - angka2;
    },
    olahAngkaDefault: (angkaPembagi) => {
        return objMath.angkaDefault;
    },
};
objMath.tambah(1,2);
const result = objMath.kurang(10,97);
console.log(result);
console.log(objMath.olahAngkaDefault());

const fruits = ["apple", "banana", "orange", "pineapple", "mango"];
fruits.sort();
console.log(fruits);

const cars = [
    {type: "honda", year: "2021"},
    {type: "toyota", year: "2010"},
    {type: "mazda", year: "2020"},
];
cars.sort(function(a,b) {return a.year - b.year});
console.log(cars);

const vegetables = new Map();
vegetables.set("tomato", 500);
vegetables.set("potato", 1000);
vegetables.set("onion", 200);
console.log(vegetables);

let text = "How are you doing today?";
const myArray = text.split(" ");
console.log(myArray);

const motorcycle = ["honda", "yamaha", "suzuki", "kawasaki", "ktm"];
let engine = motorcycle.join(" ");
console.log(engine);