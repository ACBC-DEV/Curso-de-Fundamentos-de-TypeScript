(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((price) => {
      total += price;
    });
    // prices.reduce((num, acum) => num + acum);
    return total.toString();
  };

  const printTotal = (prices: number[]): void => {
    const ata = calcTotal(prices);
    console.log(`El total es ${ata}`);
  };

  printTotal([185, 879, 68, 7, 9, -45, 57]);
})();
