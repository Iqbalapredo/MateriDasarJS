// use case 1: menggabungkan array
let arrayLama = [1, 2, 3, 4];
let arrayBaru = [5, 6, 7, 8];

// contoh menggunakan spread operator
console.log(arrayLama);
console.log(...arrayLama);

// jadinya string
let arrayGabungan = arrayLama + arrayBaru;
console.log(arrayGabungan);

// jadinya array 2 dimensi
arrayGabungan = [arrayLama, arrayBaru];
console.log(arrayGabungan);

// dengan spread operator untuk mmenggabungkan array
arrayGabungan = [...arrayLama, ...arrayBaru, ...arrayLama];
console.log(arrayGabungan);

// use case 2 : copyobject atau menggabungkan objek
const obj1 = {
  nama: 'budi',
  umur: 30,
};

const obj2 = {
  alamat: 'jakarta',
  pekerjaan: 'software enginer',
};

// jadinya object didalam object
let obj3 = { obj1 };
console.log(obj3);

// menggabungkan object denagn spread
obj3 = { ...obj1, ...obj2 };
console.log(obj3);
