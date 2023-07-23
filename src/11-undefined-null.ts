(() => {
  // let myNumber: number = undesfined;
  // let myString: string = nulls;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 54496;
  let myString: string | undefined = undefined;
  myString = 'adsda';

  function hi(name: string | null) {
    let hello = 'Hola';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }
  hi('DAVID');
  hi(null);

  function hi2(name: string | undefined) {
    let hello = 'Hola';

    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }
  hi2('DAVID');
  hi2(undefined);
})();
