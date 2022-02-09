const product = {
  productName: "LOTR",
  price: 10000,
  quantity: 0,
};

const newProduct = {
  // { this will be deleted
  //     productName: "LOTR",
  //     price: 10000,
  //     quantity: 0,
  //   }; this will be deleted
  ...product,
};

//how to destructure object
const { productName, price, quantity } = product;

product.price = 99000;

console.log(newProduct);

// const newProduct = {
//     ...product,
//     productName = "Harry Potter"
//     this will replace the productName with the last value added
//   };

//how to destructure array
const numbers = [1, 2, 3, 4];

const [a, b] = numbers;

console.log(a);
