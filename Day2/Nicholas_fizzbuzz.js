//fizz buzz
// let maxNumber = 15
//0 - maxNumber
// 1. bisa dibagi habis 3 = fizz
// 2. bisa dibagi habis 5 = buzz
// 3. bisa dibagi habis 3 & 5 = fizz buzz

let maxNumber = 15;

for (i = 1; i <= maxNumber; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizz buzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
