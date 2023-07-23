(() => {
  type Sizes = 'S' | 'L' | 'M' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  const products: Product[] = [];
  const addProduct = (data: Product) => {
    products.push(data);
  };
  addProduct({ title: 'pro1', createdAt: new Date(2000, 1, 1), stock: 54 });
  addProduct({
    title: 'pro2',
    createdAt: new Date(2001, 1, 1),
    stock: 54,
    size: 'S',
  });

  console.log(products);
})();
