
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);
console.log(years);
d=new Date();
console.log(d.toTimeString());

let diff= d.getTimezoneOffset();
console.log(diff);

const c = new Date("2015-03-25T12:00:00Z");
console.log(c);

const e=new Date()