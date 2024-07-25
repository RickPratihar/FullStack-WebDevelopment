/*Q4. Generate numbers between any 2 given numbers.
Ex
const num1 = 10
const num2 = 25;*/


function generateNumbersBetween(num1, num2) {
    let numbers = [];
    for (let i = num1 + 1; i < num2; i++) {
        numbers.push(i);
    }
    return numbers;
}

const num1 = 10;
const num2 = 25;
console.log(generateNumbersBetween(num1, num2));