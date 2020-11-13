
var today1 = new Date();
var today2 = today1.getTime();
var today3 = new Date(1605097495268);

console.log(today1, today2, today3); // 2020-11-11T12:26:14.724Z 1605097574724 2020-11-11T12:24:55.268Z

var date1 = Date.parse("2020/12/25");
var date2 = new Date(date1);
console.log(date2); // 2020-12-25T03:00:00.000Z

date1 = Date.parse("12/25/2020");
date2 = new Date(date1);
console.log(date2); // 2020-12-25T03:00:00.000Z

date1 = Date.parse("25/12/2020");
date2 = new Date(date1);
console.log(date2); // Invalid Date


date1 = Date.parse("thu Dec 25 2020");
date2 = new Date(date1);
console.log(date2); // 2020-12-25T03:00:00.000Z


date1 = Date.parse("thu Dec 25 2020 10:30:01");
date2 = new Date(date1);
console.log(date2); // 2020-12-25T13:30:01.000Z


date1 = Date.parse("2020-12-25");
date2 = new Date(date1);
console.log(date2); // 2020-12-25T13:00:00.000Z


date1 = Date.parse("2020-12-25T10:30:01");
date2 = new Date(date1);
console.log(date2); // 2020-12-25T13:30:01.000Z


date1 = Date.parse("2020-12-25T10:30:01Z");
date2 = new Date(date1);
console.log(date2); // 2020-12-25T10:30:01.000Z


date1 = Date.parse("2020-12-25T10:30:00-02:00");
date2 = new Date(date1);
console.log(date2); // 2020-12-25T12:30:00.000Z


date1 = new Date(2020, 12, 25);
console.log(date1); // 2021-01-25T03:00:00.000Z


date1 = new Date(2020, 12, 25, 10, 30, 00);
console.log(date1); // 2021-01-25T13:30:00.000Z

console.log(date1.getYear()); // 121
console.log(date1.getFullYear()); // 2020
console.log(date1.getMonth()); // 0
console.log(date1.getDay()); // 1
console.log(date1.getDate()); // 25
