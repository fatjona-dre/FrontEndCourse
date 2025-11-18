// Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.
function compareNumbers(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

// Write a function that counts the factorial of a given number.
function factorial(n) {
    let f = 1;
    for (let i = 1; i <= n; i++) f *= i;
    return f;
}

// Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
function makeNumber(a, b, c) {
    return a * 100 + b * 10 + c;
}

// Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square.
function area(w, l = w) {
    return w * l;
}

// Write a function that checks if the given number is perfect.
function isPerfect(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) if (n % i === 0) sum += i;
    return sum === n;
}

// Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range.
function perfectInRange(min, max) {
    let result = [];
    for (let i = min; i <= max; i++) if (isPerfect(i)) result.push(i);
    return result;
}

// Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss.
function timeToString(h, m, s = 0) {
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

// Write a function that accepts hours, minutes, and seconds and returns that time only in seconds.
function toSeconds(h, m, s) {
    return h * 3600 + m * 60 + s;
}

// Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.
function fromSeconds(sec) {
    let h = Math.floor(sec / 3600);
    sec %= 3600;
    let m = Math.floor(sec / 60);
    let s = sec % 60;
    return timeToString(h, m, s);
}

// Write a function that counts the difference between the dates.
function dateDiff(h1, m1, s1, h2, m2, s2) {
    let t1 = toSeconds(h1, m1, s1);
    let t2 = toSeconds(h2, m2, s2);
    let diff = Math.abs(t1 - t2);
    return fromSeconds(diff);
}
