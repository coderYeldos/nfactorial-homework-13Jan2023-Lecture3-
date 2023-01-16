'use strict'

//  Part 1
const user = {
    name: prompt("What is your name?", ""),
    age: prompt("How old are you?", ""),
    sex: prompt("Gender?", "")
};
console.log(user);

// Part 2

let a = prompt("Enter the number", "");
if (a > 0) {
    alert("Positive number");
} else if (a < 0){
    alert("Negative number");
} else {
    alert("Zero");
}


// Part 3

let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

switch(a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
    default:
        alert("Should be in range ([0,3]");
}


// Part 4
let sum = 0;
for ( let a = 1; a <= 100; a++) {
    if (a % 2 == 0) {
        sum += a;
    }
}
console.log(sum);

// Part 5

let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}


