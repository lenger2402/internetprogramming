const { KhmerDate } = require('./lib');

const date = new KhmerDate(new Date('2021-03-03T07:40:30.330Z'))

console.log(date.getDate())