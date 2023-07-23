import _ from 'lodash';

const data = [
  { usename: 'nico', role: 'admin' },
  { usename: 'vale', role: 'seller' },
  { usename: 'vaca', role: 'customer' },
  { usename: 'vargas', role: 'customer' },
];
const a = _.groupBy(data, (i) => i.role);

console.log(a);
