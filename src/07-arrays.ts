(() => {
  let price = [1, 2, 2, 6, 4, 85, 48];
  price.push(132);

  let products = ['hola', true];
  products.push('adios');

  let mixed: (number | string | boolean | Object)[] = ['hola', true];
  mixed.push(155);
  let numbers = [1, 2, 2, 6, 4, 85, 48];
  const a = numbers.map((i) => i * 2);
  console.log(a);
})();
