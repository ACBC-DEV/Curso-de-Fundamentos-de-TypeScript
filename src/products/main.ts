import { addProduct, calcStock } from './product.servic';

addProduct({ title: 'pro1', createdAt: new Date(2000, 1, 1), stock: 54 });
addProduct({
  title: 'pro2',
  createdAt: new Date(2001, 1, 1),
  stock: 54,
  size: 'S',
});

console.log(calcStock());
