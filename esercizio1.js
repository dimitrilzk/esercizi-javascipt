/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */
let arrayNumeriPositivi = [2, 4, 6, 8, 10];

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* WRITE YOUR ANSWER HERE */
const dimitri = {
  nome: "Dimitri",
  cognome: "Lazuka",
  email: "dimitrilazuka95@gmail.com",
  eta: "27",
};

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR ANSWER HERE */
dimitri["patetnato"] = true;
dimitri.patenteC = false;
console.log(dimitri);
/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* WRITE YOUR ANSWER HERE */
delete dimitri.eta;
console.log(dimitri);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR ANSWER HERE */
const ilenia = {
  nome: "ilenia",
  cognome: "zagato",
  eta: 27,
  email: "ilenia.zagato@gmail.com",
};
let emailUguali = function () {
  if (ilenia.email === dimitri.email) {
    return true;
  } else {
    return false;
  }
};
console.log(emailUguali());
/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */
let totalCost = function () {
  let totalShoppingCart = 20;
  if (totalShoppingCart >= 50) {
    totalShoppingCart += 0;
  } else {
    totalShoppingCart += 10;
  }
  return totalShoppingCart;
};
console.log(totalCost());

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */
let totalCostBlackFriday = function () {
  let totalShoppingCart2 = 30;
  if (totalShoppingCart2 >= 50) {
    totalShoppingCart2 += 0;
  } else {
    totalShoppingCart2 += 10;
  }
  return totalShoppingCart2 - (totalShoppingCart2 *= 0.2);
};
console.log(totalCostBlackFriday());

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */
let car1 = {
  brand: "audi",
  model: "sport",
  licencePLate: "aaaa",
};
let car2 = {
  brand: "audi",
  model: "sport",
  licencePLate: "aaaa",
};
let car3 = {
  brand: "audi",
  model: "sport",
  licencePLate: "aaaa",
};
let car4 = {
  brand: "audi",
  model: "sport",
  licencePLate: "aaaa",
};
let car5 = {
  brand: "audi",
  model: "sport",
  licencePLate: "aaaa",
};
let changedCar2 = Object.assign(licencePLate2, "1111");
console.log(changedCar2);
/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
