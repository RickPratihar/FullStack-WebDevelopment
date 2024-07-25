//Q6. Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/height * height.


function calculateBMI(weight, height) {
    return weight/height*height;
}

console.log("BMI is: ", calculateBMI(55, 160));