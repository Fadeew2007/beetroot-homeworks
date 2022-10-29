const log = console.log;

const productList = [
  {
    product: 'iPhone 14 Pro Max',
    price: 57815,
    number: 1,
    buy: true,
    summ: 57815,
  },
  {
    product: 'Chair',
    price: 1882,
    number: 4,
    buy: true,
    summ: 7528,
  },
  {
    product: 'Flowers',
    price: 600,
    number: 7,
    buy: false,
    summ: 4200,
  },
  {
    product: 'Monitor Asus 24',
    price: 9599,
    number: 1,
    buy: true,
    summ: 9599,
  },
  {
    product: 'TV Samsung 43',
    price: 17899,
    number: 1,
    buy: false,
    summ: 17899,
  },
];

log(productList);

productList.sort((a) => (a.buy ? 1 : -1));
log(productList);

// function buy(name) {
//   for (let key in productList) {
//     if (productList[key].product === name) {
//       productList[key].buy = true;
//       break;
//     }
//   }
// }

// function buy(name) {
//   for (let key of productList) {
//     if (key.product === name) {
//       key.buy = true;
//       break;
//     }
//   }
// }

function buy(name) {
  productList.forEach((key) => {
    if (key.product === name) {
      key.buy = true;
      return productList;
    }
  });
  return productList;
}

buy('TV Samsung 43');
console.log(productList);
