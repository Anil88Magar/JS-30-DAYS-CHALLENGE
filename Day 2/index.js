//Activity 1 : if/else statements
//Task 1
//Write a program to check if a number is positive,negative or zero 

const checkNumber = function(num){
    if(num < 0) {
        console.log(`${num} is negative`);
        return;
    }if (num > 0){
        console.log(`${num} is positive`);
        return;
    }else {
        console.log(`${num} is zero`);
    }
};

checkNumber(5);
checkNumber(-5);
checkNumber(0);

//Task 2
//Write a program to check if a person is eligible to vote age >=18

const eligibleVoter = function(age){
    if(age >= 18){
        console.log(`You can vote.`);
    }else {
        console.log(`You can't vote`);
    }
};

eligibleVoter(19);
eligibleVoter(16);

//Task 3
//Write a program to find largest of three number using nested if else statement

const largestNumber = function(x,y,z){
    let largest;

    if (x >= y) {
        if (x >= z) {
            largest = x;
        } else {
            largest = z;
        }
    } else {
        if (y >= z) {
            largest = y;
        } else {
            largest = z;
        }
}
console.log(`The largest number is ${largest}`);
};

largestNumber(10,20,30);

//Switch case

//Task 4

let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = 'Sunday'
        break;
    case 2:
        dayName = 'Monday'
        break;
    case 3:
        dayName = 'Tuesday'
        break;

    case 4:
        dayName = 'Wednesday'
        break;
    case 5:
        dayName = 'Thursday'
        break;
    case 6:
        dayName = 'Friday'
        break;
    case 7:
        dayName = 'Saturday'
        break;
        

    default:
        dayName = 'Invalid Day'
        break;
}

console.log(`The day is ${dayName}`);

//Task 5

const getGrade = function(score) {
    let grade;

    switch (true) {
        case (score >= 90):
            grade = 'A';
            break;
        case (score >= 80):
            grade = 'B';
            break;
        case (score >= 70):
            grade = 'C';
            break;
        case (score >= 60):
            grade = 'D';
            break;
        default:
            grade = 'F';
    }

    console.log(`The grade is ${grade}`);
};

getGrade(85);  

//Task 6
//Write a program to check the number is odd or even

const checkOddEven = function(num){
  const result =  (num % 2 === 0) ? 'even' : 'odd' ;
  console.log(`${num} is ${result}`);
   
}

checkOddEven(53);
checkOddEven(66);

//Task 7
//If a year is leap year

const checkLeapYear = function(year){
    let result;
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 ===0){
        result = `${year} is leap year.`
    }else {
        result = `${year} isn't leap year.`
    }
    console.log(result);
};

checkLeapYear(2024);
checkLeapYear(2025);
checkLeapYear(2026);
checkLeapYear(2027);



