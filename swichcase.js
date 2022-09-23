let angka = 100;
if (angka < 10) {
  console.log(`${angka}kurang dari 10`);
} else if (angka == 10) {
  console.log(`${angka}sama dengan 10`);
} else {
  console.log(`${angka} lebih besar 10`);
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
    break;
}

let ternaryOperator = false ? console.log('benar') : console.log('salah');
