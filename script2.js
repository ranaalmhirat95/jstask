// Edit What You Want Here

let num1 = 10;
let num2 = 10;
let num3 = "10";
let num4 = 20;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1
num1 = 11;
if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3
num3 = +11;
if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False ");
}

// Condition 4
num2 = 5;
if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5
num4 = 30;
if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7
num1 = num3 = +7;
if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
};
// 38-39 ***********************************
let day = "   mo  n         day  ";
day1 = day.trim().charAt(0).toUpperCase();
day = day1 + day.trim().slice(1);
function remove(word, c) {
  return word.split("").filter(function (char) {
    return char != c
  })
};
for (let i = 0;i<day.length;i++) {
  if(day[i] != " "){
    console.log(day[i] )
  }
}

// console.log(remove(day, " "))
day = remove(day, " ");
day = day.join("")
day = day.toString();
// console.log(day);
switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available")
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  case "World":
    console.log("Its Not A Valid Day");
    break;
  default:
    break;
}

























