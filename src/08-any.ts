(() => {
  let myDynamicVar: any;
  myDynamicVar = 123;
  myDynamicVar = 'dasd';
  myDynamicVar = null;
  myDynamicVar = {};

  myDynamicVar = 'hola';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 12125;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();
