let j = 0;
for (let i = 0; i <= 0; i++) {
  console.log(i);
}

// nilai referensi harus berubah
// i++ maksudnya i=i+1
for (let i = 0; i < 5; i++) {
  console.log(p);
}

for (let i = 0; i < 5; i = i + 1) {
  console.log(i);
}

// while dan do while
console.log('while dan do while------');
let index = 0;
while (index < 5) {
  console.log(index);
  index++;
}

index = 100;
do {
  console.log(index);
  index = index + 1;
} while (index < 10);

// contoh loop didalm loop
for (let x = 0; x < 10; x++);

while (x % 2 === 0) {
  console.log('genap:' + x);
  x++;
}

console.log('ganjil: ' + x);
