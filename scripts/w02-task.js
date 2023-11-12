/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Diego Arriola";
let currentYear = 2023;
let profilePicture = "images/foto1.jpeg"; 

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name"); 
const foodElement = document.getElementById("food"); 
const yearElement = document.getElementById("year"); 
let imageElement = document.getElementById("profilePicture"); 

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`); 

/* Step 5 - Array */
let favoriteFood = ["lasaña", "pizza", "hongos", "soda"];  
let anotherFood = "hamburguesa";
favoriteFood.push(anotherFood);
foodElement.innerHTML = `<br>${favoriteFood}`;





