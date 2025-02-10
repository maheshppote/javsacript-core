let shoppingCart = [
  {
    course: "Javascript",
    price: 999,
  },
  {
    course: "java",
    price: 599,
  },
  {
    course: "python",
    price: 1999,
  },
  {
    course: "mlOps",
    price: 2999,
  },
];

const totalAmont = shoppingCart.reduce((acc, cur) => {
  //   console.log(`${acc} - ${cur} = ${acc + cur.price}`);

  acc = acc + cur.price;
  console.log(`acc = ${acc} + ${cur.price}`);
  return acc;
}, 0);

console.log("Total Amount is :", totalAmont);
