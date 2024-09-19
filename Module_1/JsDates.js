//current date and time
let now = new Date();
console.log(now);  // Outputs current date and time

//specific dates
let specificDate = new Date(2024, 0, 1);  // January 1, 2024
console.log(specificDate);


//isodates format
let isoDate = new Date("2024-09-16");
console.log(isoDate);  // Outputs September 16, 2024

//use timestamp
let timestampDate = new Date(1660750840000);
console.log(timestampDate);

//Getting Date Components
let date1= new Date();
console.log(date1.getMilliseconds);
console.log(date1.getMinutes);
console.log(date1.getHours);
console.log(date1.getDate);
console.log(date1.getDay);
console.log(date1.getMonth);
console.log(date1.getFullYear);

//modifing date
let date2 = new Date();
date2.setFullYear(2025);
console.log(date);  // Outputs date with year set to 2025

//date formatting
let date3= new Date();
console.log(date.toDateString());  // Outputs something like "Mon Sep 16 2024"
console.log(date.toTimeString());  // Outputs something like "14:30:45 GMT+0000"
console.log(date.toISOString());   // Outputs something like "2024-09-16T14:30:45.000Z"


//comparison of  dates
let date4 = new Date(2024, 0, 1);
let date5 = new Date(2024, 0, 15);

console.log(date4 < date5);  // true

//working with timeszones
let date = new Date();
console.log(date.getTimezoneOffset());  // Outputs the offset in minutes

//calculating time diff^
let start = new Date("2024-09-01");
let end = new Date("2024-09-16");

let difference = end - start;  // Difference in milliseconds
console.log(difference / (1000 * 60 * 60 * 24));  // Convert to days


