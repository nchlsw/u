// console.log("LOTR");
// console.log("Harry Potter");
// console.log("Sherlock");
// console.log("Naruto");
// console.log("One Piece");

//other method
// let lordOfTheRing = "LOTR";
// let harryPotter = "Harry Potter";
// let sherlock = "Sherlock";
// let naruto = "Naruto";

//array : Data structure that stores several values

const books = [
  "LOTR", //0
  "Harry Potter", //1
  "Sherlock", //2
  "Naruto", //3
  "One Piece", //4
  "Doraemon", //5
];

// console.log(books.length);

// add new index to array
// books.push("The Hobbit");

//console.log(books);
//to get a specific index
// console.log(books[3]);

// to get the last index
// console.log(books[books.length - 1]);

//to modify data
//books[3] = "Boruto";
//console.log(books);

//to get index
//console.log(books.indexOf("Naruto"));

//for (let i = 0; i < books.length; i++) {
//  console.log(books[i]);
//}

//make a for loop to find an index of item

// let searchText = "One Piece";
// let resultIndex;

// for (let i = 0; i < books.length; i++) {
//   if (books[i] == searchText) {
//     resultIndex = i;
//     break;
//   }
// }
// console.log(resultIndex);
// console.log(books[resultIndex]);

//books.sort to sort alphabetically

const numbers = [1, 3, 4, 17, 21, 13, 2, 8, 40];
// numbers.sort((a, b) => a - b);

// numbers.splice(3, 1);
// numbers.pop();

// console.log(numbers);

const sentence = "Halo selamat datang di rumah saya";

const words = sentence.split(" ");

console.log(words);
