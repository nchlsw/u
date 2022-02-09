// ===== Pembuatan function

// function displayMenu() {
//   console.log("Hello World");
// }

// displayMenu();

// ====== Parameter function

// function displayUsername(username) {
//   console.log(`Hello ${username}`);
// }

// displayUsername("Doraemon");

// function displayUsername(username = "", greeting) {
//   console.log(`${greeting}, ${username}`);
// }

// let username = "Doraemon";
// let greeting = "Good morning";

// displayUsername(username, greeting);

// let namaBuah = ["Apel", "Nanas", "Mangga", "Strawberry"];
// let hargaBuah = [5000, 10000, 4000, 7000];

// let namaBuku = ["Naruto", "Harry Potter", "Sherlock", "LOTR"];
// let hargaBuku = [5000, 10000, 4000, 7000];

// function showData(itemNames = [], itemPrices = []) {
//   let result = "";

//   for (i = 0; i < itemNames.length; i++) {
//     console.log(
//       `${i + 1}. ${itemNames[i]} || Rp. ${itemPrices[i].toLocaleString()}`
//     );
//   }
// }
// console.log("===Books===");
// showData(namaBuku, hargaBuku);
// console.log("");

// console.log("===Fruits===");
// showData(namaBuah, hargaBuah);

function sumTwoNumbers(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Gunakan tipe data yang benar";
  }

  if (isNaN(a) || isNaN(b)) {
    return "Masukkan angka yang benar";
  }
  let hasil = a + b;

  return hasil;

  //   if (hasil > 10) {
  //     return "Angka anda lebih dari 10";
  //   }

  //   return "Angka anda 10 atau lebih kecil";
}

let result = sumTwoNumbers(7, NaN);

console.log(result);

// when a function meets a return, the process stops (same as when a loop meets break).

// =========Anonymous Function==========
const a = function () {};

a();
// =========Arrow Function==========
const b = (z, y) => z + y; //one liner, if there's only 1 line with no cursive bracket, arrow function automatically returns the value

console.log(b(3, 5));

const tambah = (first, second, callback) => {
  return callback(first, second);
};

console.log(
  tambah(3, 5, (a, b) => {
    return a + b;
  })
);
