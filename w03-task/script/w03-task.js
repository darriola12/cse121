/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2)
{
    return number1 + number2;
}
function addNumbers()
{
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value); 
    document.querySelector("#sum").value = add(addNumber1,addNumber2);     
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
 
const Subtract = function Subtract(numbe1, numbe2)
{
    return numbe1 - numbe2;
}
const SubtractNumbers = function SubtractNumbers()
{
    let addNumbe1 = Number(document.querySelector("#subtract1").value);
    let addNumbe2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value =    Subtract(addNumbe1,addNumbe2);
}
document.querySelector("#subtractNumbers").addEventListener("click",SubtractNumbers);
/* Arrow Function - Multiply Numbers */

const Multiply = (MultipliedNumber1,MultipliedNumber2) => MultipliedNumber1 * MultipliedNumber2;

const addMultipliers = function addMultipliers ()
{
    let Multiplied1 =  Number(document.querySelector("#factor1").value);
    let Multiplied2 =  Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = Multiply(Multiplied1, Multiplied2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", addMultipliers);

/* Open Function Use - Divide Numbers */

const division = (dividedNumber1, dividedNumber2) => dividedNumber1 / dividedNumber2;

const adddivision = function adddivision()
{
    let division1 = Number(document.querySelector("#dividend").value);
    let division2 = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = division(division1, division2);
}
document.querySelector("#divideNumbers").addEventListener("click", adddivision);

/* Decision Structure */
document.querySelector("#getTotal").addEventListener("click", function() {
    let subtotalValue = document.querySelector("#subtotal").value;

   
    if (!isNaN(subtotalValue)) {
        
        let numericValue = parseFloat(subtotalValue);

       
        let isMember = document.querySelector("#member").checked;

        if (isMember) {
            numericValue *= 0.85; 
        }

        let totalValue = numericValue.toFixed(2);

        document.querySelector("#total").textContent = `$${totalValue}`;
    } else {
        alert("Please enter a valid numeric amount for the subtotal.");
    }
})

/* ARRAY METHODS - Functional Programming */

/* Output Source Array */
let  list = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").textContent = list.join(",")

/* Output Odds Only Array */

const filterodds = list.filter((number) => number % 2 !== 0);

document.querySelector("#odds").textContent = `$${filterodds}`;

/* Output Evens Only Array */
const filterevens = list.filter((number) => number % 2 == 0);
document.querySelector("#evens").textContent = `$${filterevens}`;
// document.querySelector("#evens").innerHTML = list.filter((number) => number % 2 == 0);
/* Output Sum of Org. Array */

const reduceSum = list.reduce((sum ,number) => sum + number);
document.querySelector("#sumOfArray").textContent = `$${reduceSum}`;
/* Output Multiplied by 2 Array */

let mapMultiplied = list.map((getlist) =>getlist * 2);
document.querySelector("#multiplied").textContent = `$${mapMultiplied}`;
/* Output Sum of Multiplied by 2 Array */   
 
const sumMul = mapMultiplied.reduce((sum1, number1) => sum1 + number1 );
document.querySelector("#sumOfMultiplied").textContent = `$${sumMul}`;
