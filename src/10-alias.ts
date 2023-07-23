(() => {
  type UserID = string | number;
  let userId: UserID;

  //literas Types
  type Sizes = 'S' | 'L' | 'M' | 'XL';
  let shitSize: Sizes;
  shitSize = 'M';
  shitSize = 'L';
  shitSize = 'XL';
  shitSize = 'S';

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(userId.toLowerCase());
    }
  }
  greeting(4165, 'S');
})();
