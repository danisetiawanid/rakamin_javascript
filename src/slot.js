// Daftar buah-buahan
const fruits = ['🍎', '🍌', '🍇', '🍉', '🍊'];

// Variabel untuk menyimpan saldo user
let balance = 0;

// Fungsi untuk melakukan top up saldo
function topUp(amount) {
  balance += amount;
  console.log("Saldo ditambahkan sebesar" + amount + "Saldo saat ini:", balance);
}

// Fungsi untuk melakukan spin
function spin() {
  if (balance < 1000) {
    console.log('Saldo tidak cukup untuk melakukan spin. Silakan top up terlebih dahulu.');
    return;
  }

  balance -= 1000;

  const slots = [];
  for (let i = 0; i < 5; i++) {
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    slots.push(randomFruit);
  }

  console.log('Hasil spin:');
  console.log(slots.join(' | '));

  const uniqueFruits = new Set(slots);
  if (uniqueFruits.size === 1) {
    // Jika semua baris sama
    balance += 10000;
    console.log('Selamat! Anda mendapatkan jackpot sebesar 10000.');
  } else if (uniqueFruits.size === 2) {
    // Jika ada 4 baris sama
    balance += 4000;
    console.log('Selamat! Anda mendapatkan hadiah sebesar 4000.');
  } else if (uniqueFruits.size === 3) {
    // Jika ada 3 baris sama
    balance += 2000;
    console.log('Seamat! Anda mendapatkan hadiah sebesar 2000.');
  } else {
    console.log('Maaf, Anda belum beruntung.');
  }

  console.log("Saldo saat ini:" + balance);
}

// Contoh penggunaan
topUp(5000); // Melakukan top up sebesar 5000
spin();