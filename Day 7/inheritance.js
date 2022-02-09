//Inheritance

class Product {
  constructor(productName, price) {
    this.productName = productName;
    this.price = price;
    this.qty = 0;
  }

  calculateTotalPrice = () => {
    return this.price * this.qty;
  };
}
//extends is use to inherit the properties extended class
// if a parent code already has a method, and book has another method, the parent method will be overwritten

class Book extends Product {
  constructor(productName, price, author, pages) {
    super(productName, price);
    this.author = author;
    this.pages = pages;
  }
}

console.log(new Book("Harry Potter", 10000, "J. K. Rowling", 762));

class Shirt {
  constructor(size) {
    this.size = size;
  }
}
