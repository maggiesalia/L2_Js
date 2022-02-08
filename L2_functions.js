// // 1 - შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:

// function sum(...args){
//   let num = 0;

//   for (let item of args){
//     if (item > 0) {
//       num += item;
//     }
//   }

//   console.log(num)
// }

// sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);



// // 2 - ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:

// function sumAll(...args){
//   let nums = 0;

//   for (let i of args){
//     nums += i;
//   }

//   console.log(nums)
// }

// sumAll(10, 50, 6, 7, 8, 11, 6, 3, 9)



// 3 - ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true

// let user = {
//   firstname: 'giorgi',
//   lastname: 'saakadze',
//   age: 32,
//   isloggedin: true
// }

// function someone(person){
//   if (person.isloggedin == true){
//     return person.firstname + ' ' + person.lastname;
//   }
// }

// let customer = someone(user)
// console.log(customer);

 

// // 4 - შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური.

// function maxNum (args) {
//   let num = 0; 

//   for (let i = 0; i < args.length; i++) {
//     let x = args[i];

//     if (x > num) {
//       num = x;
//     }
//   }

//   return num
// }

// console.log(maxNum([1, 2, 3, 4, 5, 6, 7, 8, 9]));