//buat sebuah array isinya object
// tammpilkan nama dan harga, contoh : nama : leci || harga : Rp. 2000

// const daftarBuah = [
//   {
//     nama: "Apel",
//     harga: 2000,
//   },
//   {
//     nama: "Leci",
//     harga: 3000,
//   },
// ];

// for (let i = 0; i < daftarBuah.length; i++) {
//   console.log(
//     `Name : ${daftarBuah[i].nama} || Price : Rp. ${daftarBuah[
//       i
//     ].harga.toLocaleString()}`
//   );
// }

const cars = [
  {
    brand: "Toyota",
    year: 2010,
    colors: ["Red", "Black"],
  },
  {
    brand: "Honda",
    year: 2007,
    colors: ["Grey", "Black", "White"],
  },
];

// console.log(
//   `Brand : ${cars[0].brand} || Year : ${cars[0].year} || Color : ${cars[0].colors[0]} ${cars[0].colors[1]}`
// );

for (let i = 0; i < cars.length; i++) {
  let car = cars[i];
  let row = `${i + 1}. Brand : ${car.brand} || Year : ${car.year} || Colors : `;
  for (let j = 0; j < cars[i].colors.length; j++) {
    row += `${car.colors[j]} `;
  }

  console.log(row);
}

//${car.colors.join}
