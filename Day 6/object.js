const buku = {
  title: "Harry Potter",
  author: {
    name: "J. K. Rowling",
    age: 50,
    nationality: "Inggris",
  },
  pages: 658,
  yearReleased: "2001",
  alternativeTitles: ["Sang Penyihir", "The Wizard"],
  sequels: [
    {
      title: "Harry Potter 2",
      yearReleased: "2003",
    },
    {
      title: "Harry Potter 3",
      yearReleased: "2005",
    },
    {
      title: "Harry Potter 4",
      yearReleased: "2005",
    },
  ],
};

//object destructuring
// let { yearReleased, title, pages } = buku;

// console.log(yearReleased);
// console.log(title);
// console.log(pages);
// dot notation
// console.log(buku.title);

// bracket notation
// const title = "pages";
// console.log(buku["title"]);
// console.log(buku[title]);

// console.log(buku.author.age);
// console.log(buku.alternativeTitles[1]);
// console.log(buku.sequels[1].yearReleased);

// buku.publisher = "Purwadhika";
// console.log(buku);

//to delete property
delete buku.title;

console.log(buku);
