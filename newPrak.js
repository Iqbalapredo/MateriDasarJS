var menu = 'ayam';
var name = 'Alamat';
const age = 12;

var address = 'Jl. Kebon Kacang',
  school = 'SMK Telkom Purwokerto',
  gender = 'Laki-laki';

address = 'Jl. Kebon Jeruk';
console.log(address);

console.log('Perbedaan var let dan const');
/////////////////////////////////////////////

function coba() {
  let letdidalamfunction = 'let di dalam function';
  var vardidalamfunction = 'var di dalam function';
  console.log(letdidalamfunction);
  console.log(vardidalamfunction);
}
coba();

let globalScope = 'Ini bisa diakses dimana saja';

if (1 + 1 === 2) {
  let letDalamif = 'di dalam if';
  var varDidalamBlockScope = 'di dalam block scope';
}
console.log(varDidalamBlockScope);

for (let index = 0; index < 1; index++) {
  let BlockScopefor = 'di dalam for';
  var varDidalamBlockScope = 'di dalam for loop scope';
}
console.log(varDidalamBlockScope);

let umur = 123343433;
let floatingPoint = 12.3432323;
console.log('number ----');
console.log(umur);
console.log(floatingPoint);
console.log(999);

// string
let nama = 'Taufik';
let noKartu = '123456789';
console.log('string ----');
console.log(noKartu);

// boolean
let benar = true;
false;
console.log('Boolean ----');
console.log(benar);

// function
function iniFunction() {}
console.log('function ----');
console.log(iniFunction);

// null
let error = false;
let errorMessage = null;
let undf;
console.log('null vs undefined ----');
console.log(errorMessage);
console.log(undf);

// array
let listPeserta = ['Taufik', 'Alam', 'Iqbal', 'Rizki', 'Vicky'];

console.log('array ----');
console.log(listPeserta);
console.log(listPeserta.length);
console.log(listPeserta[1]);

console.log(listPeserta[listPeserta.length - 1]);

let urutan = 4;
console.log(listPeserta[urutan]);

// object
const biodata = {
  nama: 'Taufik',
  umur: 21,
  alamat: 'Jombang',
  noKtp: 'noKartu',
  error,
};
console.log('object ----');
console.log(biodata);

console.log(biodata.nama);
console.log(biodata.umur);
console.log(biodata.alamat);
let keyObj = 'umur';
console.log(biodata[keyObj]);

// array of object
let arrayOfObject = [
  {
    id: 1,
    nama: 'Taufik',
  },
  {
    id: 2,
    nama: 'Alam',
  },
  {
    id: 3,
    nama: 'Iqbal',
  },
];
console.log('array of object ----');
console.log(arrayOfObject[2].nama);

console.log('pengecekan dengan type of ----');
console.log(typeof arrayOfObject);
console.log(typeof nama);
console.log(typeof umur);

// condition
if (1 + 1 == 2) {
  console.log('true');
}
if (5 == '5') {
  console.log('5 sama dengan 5');
}
if (6 === '6') {
  console.log('6 sama dengan 6');
}
if (5 !== '5') {
  console.log('5 tidak sama dengan 5');
}
if (true) {
  console.log('true');
}
if (false === false) {
  console.log('false');
} else {
  console.log('true');
}

let jam = 3;
if (jam < 12 && jam >= 5) {
  console.log('pagi');
} else if (jam < 15 && jam > 12) {
  console.log('siang');
} else if (jam < 19 && jam > 15) {
  console.log('sore');
} else if (jam < 24 && jam > 19) {
  console.log('malam');
} else {
  console.log('dini hari');
}

let today = new Date().getDay();
switch (today) {
  case 0:
    console.log('minggu');
    break;
  case 1:
    console.log('senin');
    break;
  case 2:
    console.log('selasa');
    break;
  case 3:
    console.log('rabu');
    break;
  case 4:
    console.log('kamis');
    break;
  case 5:
    console.log('jumat');
    break;
  case 6:
    console.log('sabtu');
}
let ternaryOperator = false ? console.log('true') : console.log('false');

// perulangan
console.log('for ----');
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let j = 0;
for (j; j < 5; j++) {
  console.log('Index ke: ' + j);
}

for (let i = 0; i < 5; i = i + 1) {
  console.log(i);
}

console.log('while & do while ----');
let index = 0;
while (index < 5) {
  console.log(index);
  index++;
}

index = 100;
do {
  console.log(index);
  index++;
} while (index < 10);

for (let x = 0; x < 5; x++) {
  while (x % 2 == 0) {
    console.log('genap' + x);
    x++;
  }
  console.log('ganjil' + x);
}

// literal
let name = 'Taufik';
console.log('Halo nama saya ' + nama + ', Salam kenal!');
console.log(`Halo nama saya ${nama}, Salam kenal!`);

// spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log(arr2);

const obj1 = {
  nama: 'Taufik',
  umur: 21,
};
const obj2 = {
  alamat: 'Jombang',
  pekerjaan: 'Programmer',
};
let obj3 = { obj1 };
console.log(obj3);

obj3 = { ...obj1 };
console.log(obj3);

obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// destructuring
const siswa = {
  firstName: 'Taufik',
  lastName: 'Ramadhan',
};
let { firstName, lastName } = siswa;
console.log(`${firstName} ${lastName}`);

let rgb = [255, 281, 100];
let red = rgb[0];
let green = rgb[1];
let blue = rgb[2];
console.log(`red : ${red}, green :  ${green}, blue : ${blue}`);

const body = {
  username: 'Taufik',
  password: '12345',
  saveLoggedIn: true,
};
function cekLogin(body) {
  const { username, password } = body;
  if (!username) {
    return 'Username tidak boleh kosong';
  }
  if (!password) {
    return 'Password tidak boleh kosong';
  }
}
console.log(cekLogin(body));
