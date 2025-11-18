// // Create an object that describes a rectangle (contains the coordinates of the upper left and lower right points)
// const rectangle = {
//     left: 2,
//     top: 8,
//     right: 10,
//     bottom: 2
// };

// // A function accepts a rectangle object and types out the info about it (where the points are located).
// function getRectangleInfo(rect) {
//     return `Upper-left: (${rect.left}, ${rect.top}), Lower-right: (${rect.right}, ${rect.bottom})`;
// }

// // A function accepts a rectangle object and returns its width.
// function getWidth(rect) {
//     return rect.right - rect.left;
// }

// // A function accepts a rectangle object and returns its height.
// function getHeight(rect) {
//     return rect.top - rect.bottom;
// }

// // A function accepts a rectangle object and returns its content.
// function getArea(rect) {
//     return getWidth(rect) * getHeight(rect);
// }

// // A function accepts a rectangle object and returns its perimeter.
// function getPerimeter(rect) {
//     return 2 * (getWidth(rect) + getHeight(rect));
// }

// // A function for changing the width of the rectangle.
// function changeWidth(rect, amount) {
//     rect.right = rect.left + amount;
// }

// // A function for changing the height of the rectangle.
// function changeHeight(rect, amount) {
//     rect.bottom = rect.top - amount;
// }

// // A function for changing the width and the height of the rectangle.
// function changeSize(rect, newWidth, newHeight) {
//     rect.right = rect.left + newWidth;
//     rect.bottom = rect.top - newHeight;
// }

// // A function for conveying the X-shift of the rectangle.
// function moveX(rect, amount) {
//     rect.left += amount;
//     rect.right += amount;
// }

// // A function for conveying the Y-shift of the rectangle.
// function moveY(rect, amount) {
//     rect.top += amount;
//     rect.bottom += amount;
// }

// // A function for conveying the shift on both axis.
// function moveXY(rect, amountX, amountY) {
//     rect.left += amountX;
//     rect.right += amountX;
//     rect.top += amountY;
//     rect.bottom += amountY;
// }

// // A function for checking if the point is within the rectangle.
// function isPointInside(rect, x, y) {
//     return (
//         x >= rect.left &&
//         x <= rect.right &&
//         y <= rect.top &&
//         y >= rect.bottom
//     );
// }










// /////ne LMS-Detyrat

// // 1. Create a car object and methods for it.

// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2015,
//     speed: 80,

//     showInfo() {
//         return `${this.brand} ${this.model}, ${this.year}, speed: ${this.speed} km/h`;
//     },

//     timeNeeded(distance) {
//         let hours = distance / this.speed;
//         let restHours = Math.floor(hours / 4);
//         return hours + restHours;
//     }
// };


// // 2. Fraction object functions (very simple names)

// function add(f1, f2) {
//     return simplify({
//         top: f1.top * f2.bottom + f2.top * f1.bottom,
//         bottom: f1.bottom * f2.bottom
//     });
// }

// function subtract(f1, f2) {
//     return simplify({
//         top: f1.top * f2.bottom - f2.top * f1.bottom,
//         bottom: f1.bottom * f2.bottom
//     });
// }

// function multiply(f1, f2) {
//     return simplify({
//         top: f1.top * f2.top,
//         bottom: f1.bottom * f2.bottom
//     });
// }

// function divide(f1, f2) {
//     return simplify({
//         top: f1.top * f2.bottom,
//         bottom: f1.bottom * f2.top
//     });
// }

// function simplify(fr) {
//     function gcd(a, b) {
//         while (b !== 0) {
//             let t = b;
//             b = a % b;
//             a = t;
//         }
//         return a;
//     }
//     let g = gcd(fr.top, fr.bottom);
//     return { top: fr.top / g, bottom: fr.bottom / g };
// }


// 3. Time object with simple method names

const time = {
    hour: 20,
    minute: 30,
    second: 45,

    show() {
        return `${String(this.hour).padStart(2, "0")}:${String(this.minute).padStart(2, "0")}:${String(this.second).padStart(2, "0")}`;
    },

    addSec(sec) {
        let total = this.hour * 3600 + this.minute * 60 + this.second + sec;

        this.hour = Math.floor(total / 3600) % 24;
        total %= 3600;

        this.minute = Math.floor(total / 60);
        this.second = total % 60;
    },

    addMin(min) {
        this.addSec(min * 60);
    },

    addHour(h) {
        this.addSec(h * 3600);
    }
};
