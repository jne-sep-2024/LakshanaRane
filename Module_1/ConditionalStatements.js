
//if
let Age = 18;
if (Age >= 18) {
    console.log('You can sign up');
}


//nested if
let age = 16;
let state = 'CA';

if (state == 'CA') {
    if (age >= 16) {
        console.log('You can drive.');
    }
}


//if else

let agefactor = 16;
let country = 'USA';

if (agefactor >= 16 && country === 'USA') {
    console.log('You can get a driving license.');
} else {
    console.log('You are not eligible to get a driving license.');
}

//nested else if
let month = 6;
let monthName;

if (month == 1) {
    monthName = 'Jan';
} else if (month == 2) {
    monthName = 'Feb';
} else if (month == 3) {
    monthName = 'Mar';
} else if (month == 4) {
    monthName = 'Apr';
} else if (month == 5) {
    monthName = 'May';
} else if (month == 6) {
    monthName = 'Jun';
} else if (month == 7) {
    monthName = 'Jul';
} else if (month == 8) {
    monthName = 'Aug';
} else if (month == 9) {
    monthName = 'Sep';
} else if (month == 10) {
    monthName = 'Oct';
} else if (month == 11) {
    monthName = 'Nov';
} else if (month == 12) {
    monthName = 'Dec';
} else {
    monthName = 'Invalid month';
}
console.log(monthName);

//ternary conditional operator
let years = 18;
let message;
(years >= 18) ? (message = 'tu balak h abhi') : (message = 'tu bada hogya h ab!');;
console.log(message);

let speed = 100;
let msg = (speed > 120) ? 'too fast' : speed > 80 ? 'okay' : console.log('slow');

console.log(msg);


//switch cases:

let year = 2016;
let monthOfYear = 2;
let dayCount = 0;
switch (month) {
    case 1:
    // case 2;
    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 8:
    case 12:
        dayCount = 30;
        break;
    case 2:
        if((year%4==0 && !(year%100==0)) || (year%400==0)){
            dayCount=29;
        }else{
            dayCount=28;
        }
    default:
        dayCount=-1;
        break;
        
    }
    console.log(dayCount);

 



