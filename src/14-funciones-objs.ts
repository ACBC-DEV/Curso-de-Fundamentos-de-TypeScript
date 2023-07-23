(() => {
  const login = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };
  login({ email: 'asd@gmail', password: 564 });
  type Sizes = 'S' | 'L' | 'M' | 'XL';

  const products: any[] = [];
  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
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
