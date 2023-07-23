(() => {
  type Sizes = 'S' | 'L' | 'M' | 'XL';
  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title: title,
      createdAt: createdAt,
      stock: stock,
      size: size,
    };
  }

  const product1 = createProductToJson('SAL', new Date(), 785, 'XL');
  console.log(product1.title);

  const createProductToJson2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) => {
    return {
      title: title,
      createdAt: createdAt,
      stock: stock,
      size: size,
    };
  };
  const product2 = createProductToJson2('SAL', new Date(), 465, 'XL');
  console.log(product2);
})();
