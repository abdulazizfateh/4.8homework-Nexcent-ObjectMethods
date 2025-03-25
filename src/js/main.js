// // TASK 1
// const createUser = (name, age) => {
//     let user = {
//         name: name,
//         age: age
//     };
//     user.isAdmin = false;
//     return user;
// }
// console.log(createUser("Abdulaziz", 19));


// // TASK 2
// const sum = (numbers) => {
//     return numbers.reduce((sum, value) => {
//         return sum + value;
//     }, 0)
// }
// console.log(sum([1, 2, 3, 4, 5]));
// // const sum = numbers => numbers.reduce((sum, value) => sum + value, 0); ----> Single line code


// // TASK 3
// const displayUserInfo = (user) => {
//     const { name, age } = user;
//     return `Name: ${name}, Age: ${age}`;
// }
// console.log(displayUserInfo({ name: "Abdulaziz", age: 19 }));


// // TASK 4
// const objectToArray = (obj) => Object.entries(obj);
// console.log(objectToArray({ name: "Ali", age: 25 }));


// // TASK 5
// const getKeysAndValues = (obj) => Object.keys(obj);
// console.log(getKeysAndValues({ a: 1, b: 2, c: 3 }));


// // TASK 6
// const sumPositiveValues = (obj) => {
//     values = Object.values(obj);
//     return values.reduce((sum, value) => {
//         return sum + (value >= 0 ? value : 0);
//     }, 0)
// }
// console.log(sumPositiveValues({ a: -5, b: 10, c: 15 }));