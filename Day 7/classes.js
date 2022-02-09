// Classes

//class gives object as an output, the property is the onw with "this."
// class Car {
//the parameter of the constructor can be assign with a default value as well, will be triggered when the value is undefined
//   constructor(year, brand, color) {
//     this.year = year;
//     this.brand = brand;
//     this.color = color;
// this.price = 0;
//   }
// }
// how to make an object with class, new is the command to make a new object
// const mobilBaru = new Car("2020", "Toyota", "White");

// const mobilLama = new Car("1990", "Ford", "Red");

// console.log(mobilBaru);
// console.log(mobilLama);

// const cars = [
//   new Car("2020", "Toyota", "White"),
//   new Car("1990", "Ford", "Red"),
// ];
// console.log(cars);

class Products {
  constructor(title, price) {
    this.title = title;
    this.price = price;
    this.quantity = 2;
    this.bought = 0;
  }
  calculateTotalPrice() {
    return this.price * this.quantity;
  }

  toString() {
    return `${this.title}  ||  Rp. ${this.price.toLocaleString()} * ${
      this.quantity
    }  =  ${this.calculateTotalPrice().toLocaleString()} \n`;
  }
}

const tokoBuku = [
  new Products("LOTR", 20000),
  new Products("Harry Potter", 10000),
  new Products("Sherlock", 7000),
  new Products("Naruto", 5000),
];

// console.log(tokoBuku);
console.log(tokoBuku.toString());
// const bukuHP = new Products("Harry Potter", 7000);
// console.log(bukuHP.calculateTotalPrice());
