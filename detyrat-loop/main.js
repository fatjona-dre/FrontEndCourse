// Write a program that requests a number from a user and finds the summation of every number from 1 to num.
function sumToNum() {
  let num = +prompt("Jep një numër:");
  let sum = 0;
  for (let i = 1; i <= num; i++) sum += i;
  alert(sum);
}

// Request two numbers and find only their largest common divisor.
function gcd() {
  let a = +prompt("Numri i parë:");
  let b = +prompt("Numri i dytë:");
  while (b !== 0) {
    let t = b;
    b = a % b;
    a = t;
  }
  alert(a);
}

// Request a number and display all the divisors of it.
function listDivisors() {
  let n = +prompt("Numri:");
  let out = "";
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) out += i + " ";
  }
  alert(out);
}

// Define the number of digits in a requested number.
function countDigits() {
  let n = prompt("Numri:");
  alert(n.length);
}

// Request 10 numbers and count positive, negative, zero, odd, even.
function stats10() {
  let pos = 0, neg = 0, zero = 0, even = 0, odd = 0;
  for (let i = 0; i < 10; i++) {
    let x = +prompt("Jep numër:");
    if (x > 0) pos++;
    else if (x < 0) neg++;
    else zero++;
    if (x % 2 === 0) even++;
    else odd++;
  }
  alert(`Pozitivë: ${pos}\nNegativë: ${neg}\nZero: ${zero}\nÇift: ${even}\nTek: ${odd}`);
}

// Loop a calculator.
function loopCalc() {
  let again = true;
  while (again) {
    let a = +prompt("Numri i parë:");
    let b = +prompt("Numri i dytë:");
    let s = prompt("Shenja:");
    let r;
    if (s === "+") r = a + b;
    else if (s === "-") r = a - b;
    else if (s === "*") r = a * b;
    else if (s === "/") r = a / b;
    else r = "Gabim!";
    alert(r);
    again = confirm("Edhe një herë?");
  }
}

// Move digits of a number.
function moveDigits() {
  let n = prompt("Numri:");
  let m = +prompt("Sa shifra të lëvizen?");
  alert(n.slice(m) + n.slice(0, m));
}

// Loop days of the week.
function weekLoop() {
  let days = ["E Hënë","E Martë","E Mërkurë","E Enjte","E Premte","E Shtunë","E Diel"];
  let i = 0;
  while (confirm(days[i] + " - Next?")) {
    i = (i + 1) % 7;
  }
}

// Multiplication table from 2 to 9.
function multiplicationTable() {
  for (let n = 2; n <= 9; n++) {
    console.log("Tabela për " + n);
    for (let i = 1; i <= 10; i++) {
      console.log(`${n} x ${i} = ${n * i}`);
    }
  }
}

// Guess the number game.
function guessNumber() {
  let min = 0, max = 100;
  while (true) {
    let mid = Math.floor((min + max) / 2);
    let ans = prompt(`A është numri yt > ${mid}, < ${mid}, apo == ${mid}?`);
    if (ans === ">") min = mid + 1;
    else if (ans === "<") max = mid - 1;
    else if (ans === "==") {
      alert("Numri është: " + mid);
      break;
    } else alert("Vetëm > < ==");
  }
}
