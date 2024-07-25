/*Q5. Use the while loop to print numbers from 1 to 25 in ascending and descending order.*/

function printNumbersAscending(num1, num2) {
    let i = num1;
    while (i <= num2) {
        console.log(i);
        i++;
    }
}

function printNumbersDescending(num1, num2) {
    let i = num2;
    while (i >= num1) {
        console.log(i);
        i--;
    }
}

const num1 = 1;
const num2 = 25;
printNumbersAscending(num1, num2);
printNumbersDescending(num1, num2);