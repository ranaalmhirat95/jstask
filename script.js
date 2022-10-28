console.log(100 == "100"); // true
console.log(100 <= 1000); // true
console.log(110 >= 100 && 10 <= 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 >= +"-40"); // true
console.log(!10 != -"-40"); // true
console.log(+"10" === 10); // true
console.log(!20 === false); // true

//  02********************
let num1 = 10;
let num2 = 20;

console.log(num2 >= num1); // true
console.log(num1 != num2); // true
console.log(num1 <= num2); // true
console.log(typeof num1 === typeof num2); // true
console.log(!(!num1 || !num2)); // true
console.log(!(!num1 && !num2)); // true

//  03***********************
let a = 20;
let b = 30;
let c = 10;

console.log(a <= b && a >= c || a == b); // true
console.log(a != b || a >= c); // true
console.log(!(a >= b) && !(a >= b) && !(a <= c) && !(a <= c)); // true


//  (33-37)*****************************************
// Test Case 1
let valueOne = 9; // "009"
if (valueOne <= 10) {
    console.log(`00${valueOne}`)
};
// Test Case 2
let valueTwo = 20; // "020"
if (valueTwo > 10 && valueTwo < 100) {
    console.log(`00${valueTwo}`)
};
// Test Case 3
let valueThree = 110; // "110"
if (valueThree >= 100) {
    console.log(valueThree)
};

// 02 ******************
let num11 = 9;
let str = "9";
let str2 = "20";
//1
if (num11 == str) {
    console.log(`"${num11} Is The Same Value As ${str}"`)
};
//2
if (num11 === str) {

} else {
    console.log(`"${num11} Is The Same Value As ${str} But Not The Same Type"`)
};
//3
if (num11 === str2) {

} else {
    console.log(`"${num11} Is Not The Same Value Or The Same Type As ${str2}"`)
};
//4
if (str2 != str) {
    console.log(`"${str} Is The Same Type As ${str2} But Not The Same Value"`)
};
// 03
let num111 = 10;
let num22 = 30;
let num33 = "30";
if (num33 > num111 && num33 != num22) {
}else if (num33 > num111 && num33 === num22) {
}else if (num33 != num111 && num33 == num22) {
    console.log(`"${num33} Is Larger Than ${num111} And Type string Not The Same Type As number"`);
    console.log(`"${num33} Is Larger Than ${num111} And Value Is The Same As ${num33} And Type string Not The Same Type As number"`);
    console.log(`"${num33} Value And Type Is Not The Same As ${num111} And Type Is Not The Same As ${num22}"`);  

};


















