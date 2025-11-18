'use strict';
// function greet(name, name2){
//     name = prompt(`enterName`);
//     name2=
//     alert(`hello, &{name + name}!`);
// }
// greet(prompt(`enterName`), prompt(`enterName`));
// function functionName = function (){
//     console.log(`Test`);
// }







// function calc(n1,n2,sign){
//     let total;
//     switch(sign){
//         case"+";
//         total = n1 + n2;
//         console.log(total);
//         break;
//         case"-";
//         total = n1 - n2;
//         console.log(total);
//         break;
//         case"*";
//         total = n1 * n2;
//         console.log(total);
//         break;
//         case"/";
//         total = n1 / n2;
//         console.log(total);
//         break;
//         default;
//         console.error(`please enter a valid sign`);
//     }
// }
// let userN1 = parseInt (prompt(`enter firstr nr`));
// let userN2 = parseInt (prompt(`enter second nr`));
// let operator = prompt(`enter operator`);
// calc(userN1, userN2, operator);








// let message = "hello from beetroot";
// function sayHello(){
//     let message =`Hello!`;
//     console.log(message);
// }
// sayHello();
// console.log(message);



// me shtu nfillim te cdo file use StrictMode, e lexon si javascript

// number = 10;
// console.log(number);

// function test() {
// console.log(test);
// }



// function test() {
// let a = 1;
// console.log(a);

//  function inside() {
// a = 2;
// console.log(a);
// }
// inside();
// }
// test();






// function getRectArea(width, height) {
//     return width * height;
// } 

// let rectArea = getRectArea(23, 5);
// console.log('rectArea');






//DETYRAT NE KLASE

// Write a function that accepts 2 numbers and returns the smaller one.
// function findSmaller(a, b) {
//     return a < b ? a : b;
// }

// let findSmaller = (a, b) => a < b ? a : b;






// Write a function that raises a number to a given power. 
// function pow(num, expo) {
//     let result;

//     for(let i=0; i < expo; i++) {
//         result *= num;
//     }

//     return result;
// }

// console.log(pow(2,4));




// Write a function that accepts 2 numbers and a sign (+ - * /), counts and returns the result.
// function findResult(a,b) {
//      switch(sign){
//         case"+";
//         total = n1 + n2;
//         console.log(total);
//         break;
//         case"-";
//         total = n1 - n2;
//         console.log(total);
//         break;
//         case"*";
//         total = n1 * n2;
//         console.log(total);
//         break;
//         case"/";
//         total = n1 / n2;
//         console.log(total);
//         break;
//         default;
//         console.error(`please enter a valid sign`);
//      }
//     return result;

// }




// Write a function that checks if a given number is prime.
// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n <= 3) return true;
//     if (n % 2 === 0 || n % 3 === 0) return false;
//     for (let i = 5; i * i <= n; i += 6) {
//         if (n % i === 0 || n % (i + 2) === 0) {
//             return false;
//         }
//     }
//     return true;
// }





// Write a function that accepts a number and displays a multiplication table for it. Call the function for all the numbers from 2 to 9.
// function tabela(number) {
//     console.log("Tabela e shumzimit per " + number);
//     for (let i = 1; i < 10; i++) {
//     console.log(num + " x " + i + " = " + (num * i));
//     }
//     console.log("number");
// }

// for (let n = 2; n <= 9; n++) {
//     tabela(n);
// }




// Write a function that will execute the % operator task. The function accepts 2 parameters and returns the remainder on division of the first parameter by the second one. Use only + - * / in the function, not the % operator itself. For example, remainder(12, 5) returns 2, remainder(5.5, 2) returns 1.5, remainder(4, 2) returns 0.
// function remainder(a, b) {
//   let q = Math.floor(a / b); 
//   return a - b * q;          
// }

// console.log(remainder(12, 5));   
// console.log(remainder(5.5, 2));  
// console.log(remainder(4, 2));  






// Write a function that accepts from one to five numbers and returns their sum.
// function sumNumbers(a, b, c, d, e) {
//   return (a || 0) + (b || 0) + (c || 0) + (d || 0) + (e || 0);
// }

// console.log(sumNumbers(3));          
// console.log(sumNumbers(3, 2));       
// console.log(sumNumbers(1, 2, 3, 4)); 
// console.log(sumNumbers(5, 5, 5, 5, 5)); 




// Write a function that accepts from one to five numbers and returns the biggest one.
// function findBiggest(a, b, c, d, e) {
//     return a > b ? a * b;
// }



// Write a function that displays all even or odd numbers in a given range. The third parameter of the boolean type defines which numbers to put out (true - even, false - odd). 
// function showNr(start, end, showEven) {
//   for (let i = start; i <= end; i++) {
//     if (showEven && i % 2 === 0) {
//       console.log(i);
//     } else if (!showEven && i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// }






// Write a function that accepts a date (day, month, year) and returns the next day in a string "dd:mm:yy". The leap year check should be a separate function. 






// Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.
// function compareNumbers(a, b) {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   return 0;
// }




// Write a function that counts the factorial of a given number. 
// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//        result *= i;
//   }
//   return result;
// }
// console.log(factorial);




// Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
// Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square. 
// Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of all its divisors. For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.
// Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range. Use the previous function to check, if numbers are perfect. 
// Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.
// Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.
// Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.
// Write a function that counts the difference between the dates. The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones: at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.