//Q5. Write a JavaScript program that calculates the simple interest using the formula Simple interest = (principal * rate * time) / 100.

const simpleInterest = (principal, rate, time) => {
    return (principal * rate * time) / 100
    
}
console.log("Simple Interest is: ", simpleInterest(1000, 5, 2));