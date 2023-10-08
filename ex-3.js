const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 300 },
  { name: "Keyboard", price: 50 },
];

function getMostExpensiveProduct(products) {
  // Start coding here
  let expentPrice = 0;
  let newObj = {};
  for (let item of products) {
    if (item.price > expentPrice) {
      expentPrice = item.price;
      newObj = item;
    }
  }
  return newObj;
}

getMostExpensiveProduct(products); // Output: { name: "Laptop", price: 1000 }
