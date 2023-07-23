(() => {
  let userId: string | number;
  userId = 12;
  userId = 'ad';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(myText.toLowerCase());
    } else {
      console.log(myText.toFixed(1));
    }
  }
  greeting('HOLA');
  greeting(548.5656);

  greeting(userId);
})();
