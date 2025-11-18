// const user = {
//     name: 'jana',
//     age: 25,
//     'eye color': 'brown',
// };

// let varName = {
//    emriVleres: 'vlera',
//    'this is the long name': 2,
// }

// console.testVlera = 'test';

// //objectName.emriIVleresNew = 'test';
// //console.log(objectName);


// console.log(console);







// const user = {
//     name: 'jana',
//     age: 25,
//     'eye color': 'brown',
// };

// for(let key in user) {
//     console.log('${key} = ${user[key]}');
// }
///////////////key ka mi lexu anen e majte psh name, age etj te useri.


///////////////dy menyra me thirr objektin ose object.emri ose ne kllapa object.prop
// object.prop

// object[prop]






// // const user = {
// //     name: 'testName',
// address: {
//     street: 'ulpiana',
//     streetNumber: 5,
// }
// };


// (let propertyToSearch in user) {
//     console.log('${propertyToSearch} = ${user[propertyToSearch]}');
// }
//     if(typeof propertyToSearch == 'object') {
//       (let key in propertyToSearch) {
        
//       }
       
//     }









///////////////////   DETYRAT ME OBJEKTE

// Create an object that describes a rectangle (contains the coordinates of the upper left and lower right points) and create the following functions for working with this object: 
// let rectangle = {
//     topLeft: {
//         x: 10,
//         y: 9,
//     },
//     bottomRight: {
//         x: 2,
//         y: 3,
//     },
// }

// function rectangleInformation (obj) {
//     if(typeof obj =! 'object') console.log('wrpng datatype');


//     for (let key in obj) {
//     for (let i in obj[key]) {
//         console.log((obj[key])[i]);
//     }
// }
// }

// rectangleInformation(rectangle);









// A function accepts a rectangle object and types out the info about it (where the points are located).
/////////////e kem bo brenda detyres se pare

// let rectangle = {
//   topLeft: {
//     x: 10,
//     y: 9
//   },
//   bottomRight: {
//     x: 2,
//     y: 3
//   },
//   calcWidth: function() {
//     return this.topLeft.x - this.bottomRight.x
//   },
//   calcHeight: function() {
//     return this.topLeft.y - this.bottomRight.y
//   },

// }

// console.log(rectangle.calcWidth());
// console.log(rectangle.calcHeight());











// A function accepts a rectangle object and returns its width.
// A function accepts a rectangle object and returns its height.
// A function accepts a rectangle object and returns its content. 
// A function accepts a rectangle object and returns its perimeter. 
// A function for changing the width of the rectangle. It takes an object and by how many units to change the width.
// A function for changing the height of the rectangle. It takes an object and by how many units to change the height.
// A function for changing the width and the height of the rectangle. It takes an object and by how many units to change the width and the height.
// A function for conveying the X-shift of the rectangle. It takes an object and by how many units to move it. 
// A function for conveying the Y-shift of the rectangle. It takes an object and by how many units to move it. 
// A function for conveying the shift on both axis. It takes an object and by how many units to move it for both X and Y axis. 
// A function for checking if the point is within the rectangle. It accepts a rectangle object and the point coordinates.