// Request a user's age and define whether he/she is an infant (0–2), a child (3-11), a teen (12–18), an adult (19-60) or a senior citizen (60– ...). Print the result to the webpage as a paragraph.
// Request a number from 0 to 9 from a user and display the symbol that is placed on that keyboard button (for example, 1–!, 2–@, 3–# etc). Display a result in the console.
// Ask a user 3 questions, each with 3 answer options. The user gets 2 points for each correct answer. Show the earned points after the test.
// let score = 0;
// let q1 = prompt("Whats the symbol of water?, A)H20, B)2HO, C)OH2");
// if(q1===A) {
//     score += 2;
// } else{
//     console.log('false');
// }


// let q2 = prompt("Whats the largest planet?, A)Earth, B)Jupiter, C)Saturn");
// if(q2===B) {
//     score += 2;
// } else{
//     console.log('false');
// }


// let q3 = prompt("What was Newton known for?, A)german, B)english, C)physics");
// if(q3===C) {
//     score += 2;
// } else{
//     console.log('false');
// }
// console.log('You have earned' + score + 'points');


// Request a number from a user, and define whether it is positive, negative, or zero. Display a resulting message as an alert. 
// let number1 = prompt('Write a number') * 1;

// if( number1 > 0) {
//     alert('This number is positive');
// } if (number1 <0) {
//     alert('This number is negative');
// } else if(number1 === 0) {
//     alert('This number is 0');
// }



// Request a user's age and check whether it is realistic (0-120 y.o.). If it is realistic, display a message 'Hi! You are # years old', otherwise – 'Hm… Is it even possible?'.
// Request a number from a user and type out its modulus (|7| = 7, |-7| = 7). Display a result in the console.
// Request time from a user (hh:mm:ss) and check whether the data input is correct.
// let timeInput = prompt('shkruaj kohen:hh:mm:ss') * 1;
// su perfundu



// Request the coordinates of a point (x, y) and define the number of the quarter where that point is located. The options of the point being on one of the axis or at the origin should be included.
// Request a purchase sum from a user and show the sum to pay with a discount: from 200 tо 300 it would be 3%, from 300 to 500 – 5%, from 500 and above – 7%.



// Tasks on SWITCH.
// const expr = "Papayas";
// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Mangoes":
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound.");
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }
// let vleraPerMuKrahasu = 150;
// switch (vleraPerMuKrahasu > 0) {
//     case (vleraPerMuKrahasu < 100):
//     console.log('vlera eshte ner 100');
//     break;
//     case (vleraPerMuKrahasu < 50):
//     console.log('vlera eshte ner 50');
//     break;
//     case (vleraPerMuKrahasu < 25):
//     console.log('vlera eshte ner 25');
//     break;
//     case (vleraPerMuKrahasu < 20):
//     console.log('vlera eshte ner 20');
//     break;
//     default:
//         console.log('vlera eshte permi 100')
// }

// Request a number of a month from a user. Print the name of the month to the webpage as a paragraph.
// let userMonthNumber = prompt('enter yout fav month as a nr') * 1;

// switch(userMonthNumber > 0 && userMonthNumber <= 12) {
//     case userMonthNumber = 1:
//         alert('January');
//          console.log('January');
//         break;
//     case userMonthNumber = 2:
//         alert('February');
//          console.log('February');
//         break;
//    case userMonthNumber = 3:
//         alert('March');
//          console.log('March');
//         break;
//         case userMonthNumber = 4:
//         alert('April');
//          console.log('April');
//         break;
//         case userMonthNumber = 5:
//         alert('May');
//          console.log('May');
//         break;
//         case userMonthNumber = 6:
//         alert('June');
//          console.log('June');
//         break;
//         case userMonthNumber = 7:
//         alert('July');
//          console.log('July');
//         break;
//         case userMonthNumber = 8:
//         alert('August');
//          console.log('August');
//         break;
//         case userMonthNumber = 9:
//         alert('September');
//          console.log('September');
//         break;
//         case userMonthNumber = 10:
//         alert('October');
//          console.log('October');
//         break;
//         case userMonthNumber = 11:
//         alert('November');
//          console.log('Novemer');
//         break;
//         case userMonthNumber = 12:
//         alert('December');
//          console.log('December');
//         break;
//         default:
//             console.log('Invalid Month');
// }



// let numberA = prompt('enter Number A') * 1;
// let numberB = prompt('enter Number B') * 1;
// let op = prompt('enter operator +, -, *,/');

// switch (op) {
//     case "+":
//         console.log('${numberA} + ${numberB} = ${numberA + numberB}');
//         break;
//         case "-":
//         console.log('${numberA} - ${numberB} = ${numberA - numberB}');
//         break;
//         case "*":
//         console.log('${numberA} * ${numberB} = ${numberA * numberB}');
//         break;
//         case "/":
//             if(numberB ===0) {
//                 console.log('No division with 0');
//             } else {
//                 console.log('${numberA} / ${numberB} = ${numberA / numberB}');
//         break;
// }
  //su kry//




// Execute a calculator. A user puts in 2 numbers and a symbol (+ - * /). The program solves it depending on the symbol and shows the result.

// Tasks on ternary operator.
// const age = 17;
// const canVote = age >= 18 ? "yes" : "no";


// let canVote2 = "";

// if(age >= 18) {
//     canVote2 = "yes";
// }
//  else {
//    canVote2 = "no";
//  }
//  console.log(canVote2);


// Request 2 numbers and display the larger one.
// let numberA = prompt('number a') * 1;
// let numberB = prompt('number b') * 1;

// console.log('the larger nr is: $(numberA > numberB ? numberA : numberB');



// Request 1 number and check whether it is divisible by 5 or not. 
// Request the name of a planet. If a user types Earth or earth, the program displays "Hello, Earthling". In other cases, it displays "Hello, alien!".
// let planet = prompt('enter planet')
// /sukry


// Tasks on WHILE.
// let n = 0;

// while (n < 3) {
//   n++;
// }
// console.log(n);



// console.log(n);
// Display something to the console as many times as a user stated.
// let nrToDisplay = prompt('enter the number of repetition') * 1 ;
// let nrToDisplay = 0;
// let nrToDisplay = 'hello from the while loop';

// whille (nrToDisplay > 0) {
//     console.log(textToDisplay);
//     nrToDisplay--;

//     nrToDisplay = nrToDisplay - 1;
// }
// ...


// A user types in a number, and all the numbers from it to 0 are displayed.
// Request a number and an extent. Raise the number to the given power and display the result. Do not use ** or Math.pow() here.
// let baseNr = parseInt(prompt('enter a nr'));
// let exp = parseInt(prompt('enter exp: '));

// while(exp > 1) {
//     baseNr = baseNr * baseNr;
//     console.log('nr is: ', baseNr);

//     exp--;
// }




// Request 2 numbers and find all the common divisors.
// let numberA = parseInt(prompt(`enter number A:`));
// let numberB = parseInt(prompt(`enter number B:`));
// let divident = 1;
// while( (numberA % divident ==0) && ( numberB % divident ==0 ));
// if( (numberA % divident ==0) && ( numberB % divident ==0 )){
// }
// vazhdon




// Count the factorial of the number given by a user. For example, 4! is 1 * 2 * 3 * 4 = 24.
// let number = parseInt(prompt('enter the nr: number!'));
// let iterator = 1;
// let fact =1;
// while((iterator <= number )) {
//     fact = fact * iterator;
//     iterator++;
// }

// console.log('your factoriel for ${number}= ${fact}');






// Tasks on DO WHILE.
// let result = "";
// let i = 0;

// do {
//   i += 1;
//   result += i;
// } while (i < 5);

// console.log(result);
// Suggest a user solve 2 + 2 * 2 until he/she does it right.
// let answer;

// do {
//     answer = parseInt(prompt('solve 2 + 2 * 2'));
// } while (answer =! 6) {
//     console.log('Outside if');
    
//     if (answer =! 6) {
//     console.log('Inside if');
//     console.log('wrpng answer, try again');
// } else {
//     console.log('inside else');
//     console.log('correct answer');

// }
// }






// Store 1000 as a variable. Divide this variable by 2 while it is greater than 50. Display this number and how many divisions it took. 
// let baseNumber = 1000;
// let steps = 0;
// do {
//     baseNumber = baseNumber / 2;
//     steps++;

// } while (baseNumber > 50) {

//     steps++;
// } 

// console.log('steps', steps);
// console.log('baseNumber', baseNumber);

// ??






// Tasks on FOR.
// let str = "";

// for (let i = 0; i < 9; i++) {
//   str += i;
// }

// let i = 0;
// while(i < 9) {
//     str +=1;
// }



// console.log(str);
// Count sheep. Request a non-negative integer, 3 for example, and print a string with a murmur: "1 sheep...2 sheep...3 sheep..." to the page. If a user types a negative number in, alert an error.
// let number = prompt("Shkruaj nje numer jo-negativ:");

// if (n < 0) {
//   console.log("Gabim! Shkruaj një numer pozitiv.");
// } else {
//     let result = "";
// }





// Request a number from a user. Display all the numbers from 1 to 100 which are divisible by a given number.




// Put out every 4th element of a given range. A user states the min and max value in the range.
// Request a number and check whether it is prime. A prime number is divisible without a remainder by itself and 1.



// let a = 1;
// if (a > 0) {
//     result = 'positive';
// } else {
//     result = 'NOT positive';
// }

// if (a > 1) {
//     weferfwefffre
//     erferfergrger
//     gergeghetsrgg
// } else if {

// }


// let userAge = prompt('enter your age') * 1;
// if (userAge >=0 && userAge <= 2) {
//     console.log('you are an infant');
// } else if (userAge >= 3 && userAge <=11) {
//     console.log('you are a  child');
// }else if (userAge >= 12 && userAge <=18) {
//     console.log('you are a  teenager');
// } else if (userAge >= 19 && userAge <=60) {
//     console.log('you are an adult');
// }else if (userAge > 60) {
//     console.log('you are a senior citizen');
// }
//su kry//