// Naviation bar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar") = "0";
  } else {
    document.getElementById("navbar") = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

// Content 1
document.getElementById("0101").innerHTML = "The script Tag";

function function0102() {
    document.getElementById("0102").innerHTML = "Content changed.";
}

function function0103() {
    document.getElementById("0103").innerHTML = "Paragraph changed";
}

function myFunction() {
    document.getElementById("demo").innerHTML="Paragraph changed.";
}

// Content 2
document.getElementById("0201").innerHTML = 5 + 6

console.log(5 + 6);


// Content 3
let x0300, y0300, z0300; //Statement 1
x0300 = 5        //Statement 2
y0300 = 6        //Statement 3
z0300 = x0300 + y0300;   //Statement 4
document.getElementById("0300").innerHTML = "Value = " + z0300;

let a0301, b0301, c0301;
a0301 = 5; b0301 = 6; c0301 = a0301 + b0301;
document.getElementById("0301").innerHTML = 
"Value = " + c0301;

function myFunction3_2() {
  document.getElementById("0302a").innerHTML = "Value 1";
  document.getElementById("0302b").innerHTML = "Value 2";
}

// Content 4
let v0401_01, v0401_02;
v0401_01 = 6;
document.getElementById("0401_01").innerHTML = "Value =" + v0401_01;
document.getElementById("0401_02").innerHTML = "Undefined value = " + v0401_02;

let v0402_01, v0402_02, v0402_03, v0402_04, v0402_05;

v0402_01 = 5 + 6;
v0402_02 = "5" + 2 + 3;
v0402_03 = 5 + 2 + "3";
v0402_04 = 12 % 5;
v0402_05 = 10;
v0402_05++;
v0402_06 = 5;
v0402_06 = Math.pow(v0402_06,2)
document.getElementById("0402_01").innerHTML = "5 + 6 = " + v0402_01;
document.getElementById("0402_02").innerHTML = "'5' + 2 + 3 = " + v0402_02;
document.getElementById("0402_03").innerHTML = "5 + 2 + '3' = " + v0402_03;
document.getElementById("0402_04").innerHTML = "12 % 5 = " + v0402_04;
document.getElementById("0402_05").innerHTML = "10++ = " + v0402_05;
document.getElementById("0402_06").innerHTML = "Math.pow(5,2) = " + v0402_06;

let v0403;
v0403 = 5;
document.getElementById("0403_01").innerHTML = "Value = " + v0403;
document.getElementById("0403_02").innerHTML = "Calculated Value = " + v0403 * 10;

// a single-line comment before each code line
let v0404;
v0404 = "Comment" // Single Line Comments
/*
Multi-line Comments
*/
document.getElementById("0404").innerHTML = v0404

let v0405, V0405;
v0405 = "name1";
V0405 = "name2";
document.getElementById("0405_01").innerHTML = "v0405 = " + v0405;
document.getElementById("0405_02").innerHTML = "V0405 = " + V0405;


// Content 5
let v0500_01, v0500_02, v0500_03, v0500_04, v0500_05;
let v0500_06, v0500_07; 
v0500_01 = typeof("Name");
v0500_02 = typeof(12.3);
v0500_03;
v0500_04 = typeof("");
v0500_05 = typeof(null);
v0500_06 = typeof {n1:"v1", n2:12} ;
v0500_07 = typeof function myFunc(){};
document.getElementById("0500_01").innerHTML = 'typeof("Name") = ' + v0500_01;
document.getElementById("0500_02").innerHTML = 'typeof(12.3) = ' + v0500_02;
document.getElementById("0500_03").innerHTML = 'typeof(undefined) = ' + typeof(v0500_03);
document.getElementById("0500_04").innerHTML = 'typeof("") = ' + v0500_04;
document.getElementById("0500_05").innerHTML = 'typeof(null) = ' + v0500_05;
document.getElementById("0500_06").innerHTML = 'typeof {n1:"v1", n2:12} = ' + v0500_06;
document.getElementById("0500_07").innerHTML = 'typeof function myFunc(){} = ' + v0500_07;

let v0501_01, v0501_02, v0501_03, v0501_04, v0501_05;
v0501_01 = 10;
v0501_02 = 10.5;
v0501_03 = 12e6;
v0501_04 = 100 / "string";
v0501_05 = 2 / 0;
document.getElementById("0501_01").innerHTML = "Number value = " + v0501_01;
document.getElementById("0501_02").innerHTML = "Number value with decimals = " + v0501_02;
document.getElementById("0501_03").innerHTML = "12e6 = " + v0501_03;
document.getElementById("0501_04").innerHTML = '100 / "string" = ' + v0501_04;
document.getElementById("0501_05").innerHTML = '2 / 0 = ' + v0501_05;

const v0502_01 = "name";
const v0502_02 = "surname";
document.getElementById("0502_01").innerHTML = "name + surname = " + v0502_01 + v0502_02; 
document.getElementById("0502_02").innerHTML = 'name + " " + surname = ' + v0502_01 + " " + v0502_02;

const v050201_01 = "ABCDE"
const v050201_02 = "AB DE"
const v050201_03 = "富士山"
document.getElementById("050201_01").innerHTML = "ABCDE length = " + v050201_01.length;
document.getElementById("050201_02").innerHTML = "AB DE lenght = " + v050201_02.length;
document.getElementById("050201_03").innerHTML = "富士山 lenght = " + v050201_03.length;

const v050203_00 = "one two three one two";
const v050203_01 = v050203_00.indexOf("two");
const v050203_02 = v050203_00.lastIndexOf("two");
const v050203_03 = v050203_00.lastIndexOf("four");
const v050203_04 = v050203_00.search("two");
document.getElementById("050203_00").innerHTML = 'v050203_00 = ' + v050203_00;
document.getElementById("050203_01").innerHTML = 'v050203_00.indexOf("two") =' + v050203_01;
document.getElementById("050203_02").innerHTML = 'v050203_00.lastIndexOf("two") =' + v050203_02;
document.getElementById("050203_03").innerHTML = 'v050203_00.lastIndexOf("four") =' + v050203_03;
document.getElementById("050203_04").innerHTML = 'v050203_00.search("two") =' + v050203_04;

const v050204_00 = "one two three one two";
const v050204_01 = v050204_00.slice(4, 7);
const v050204_02 = v050204_00.slice(-7, -4);
const v050204_03 = v050204_00.substring(8);
const v050204_04 = v050204_00.substr(4,3);
document.getElementById("050204_00").innerHTML = 'v050203_00 = ' + v050204_00;
document.getElementById("050204_01").innerHTML = 'v050203_00.slice(4, 6) = ' + v050204_01;
document.getElementById("050204_02").innerHTML = 'v050204_00.slice(-7, -4) = ' + v050204_02;
document.getElementById("050204_03").innerHTML = 'v050203_00.substring(8) = ' + v050204_03;
document.getElementById("050204_04").innerHTML = 'v050203_00.substr(4,3) = ' + v050204_04;

const v0503_01 = 5;
const v0503_02 = 6;
const v0503_03 = (v0503_01 == v0503_02);
document.getElementById("0503_01").innerHTML = "5 == 6 " + v0503_03;

const v0504_01 = ["item1", "item2", "item3"];
v0504_01[2] = "newitem3";
document.getElementById("0504_01").innerHTML = 'v0504_01 = ["item1", "item2", "item3"]';
document.getElementById("0504_02").innerHTML = "v0504_01[1] = " + v0504_01[1];
document.getElementById("0504_03").innerHTML = "v0504_01[v0504_01.length -1] = " + v0504_01[v0504_01.length -1];


let v050401_01, v050401_02, v050401_03; 
v050401_01 = ["item1", "item2", "item3"];
v050401_02 = v050401_01.length;
v050401_03 = "";
for (i =0; i < v050401_02; i++){   
  v050401_03 += v050401_01[i] + "<br>";
}
document.getElementById("050401_01").innerHTML = v050401_03;

let v050402_01, v050402_02; 
v050402_01 = ["item1", "item2", "item3"];
v050402_02 = ""                     //Create empty text
v050402_01.forEach(function050402);     //forEach loop
function function050402(value){
  v050402_02 += value + "<br>"; //Add text
}
document.getElementById("050402_01").innerHTML = v050402_02;

let v050403_01 = [3, 2, 1, 5, 4];
function myArrayShuffle(arr) {
let i, j, k;
  for (i = arr.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = arr[i]
    arr[i] = arr[j]
    arr[j] = k
  }
  document.getElementById("050403_01").innerHTML = v050403_01;
}

let result = "";
let v050404_01, v050404_02, v050404_03, v050404_04, v050404_05;
let v050404_06, v050404_07, v050404_08, v050404_09, v050404_10;
let v050404_11, v050404_12;
v050404_01 = [3, 2, 1, 5, 4];
//Array.forEach()
v050404_01.forEach(function050404_01);
document.getElementById("050404_01").innerHTML = result;
function function050404_01(value, index, array) {
  result = result + value + "---";
}

result = "";
v050404_01 = [3, 2, 1, 5, 4];
v050404_02 = v050404_01.map(function050404_02)
document.getElementById("050404_02").innerHTML = v050404_02;
function function050404_02(value, index, array) {
  return value * 2;
}

result = "";
v050404_01 = [3, 2, 1, 5, 4];
v050404_03 = v050404_01.filter(function050404_03);
document.getElementById("050404_03").innerHTML = v050404_03;
function function050404_03(value, index, array) {
return value > 2;
}

result = "";
v050404_01 = [3, 2, 1, 5, 4];
v050404_04 = v050404_01.reduce(function050404_04, 100);
document.getElementById("050404_04").innerHTML = v050404_04;
function function050404_04(total, value, index, array) {
return total + value;
}

result = "";
v050404_01 = [3, 2, 1, 5, 4];
v050404_05 = v050404_01.reduceRight(function050404_05);
document.getElementById("050404_05").innerHTML = v050404_05;
function function050404_05(total, value, index, array) {
return total + value;
}

result = "";
v050404_01 = [3, 2, 1, 5, 4];
v050404_06 = v050404_01.every(function050404_06);
document.getElementById("050404_06").innerHTML = v050404_06;
function function050404_06(value, index, array) {
return value > 2;
}

result = "";
v050404_01 = [3, 2, 1, 5, 4];
v050404_07 = v050404_01.some(function050404_07);
document.getElementById("050404_07").innerHTML = v050404_07;
function function050404_07(value, index, array) {
return value > 2;
}

result = "";
v050404_01 = ["item1", "item2", "item3", "item2", "item1"];
v050404_08 = v050404_01.indexOf("item2");
document.getElementById("050404_08").innerHTML = v050404_08;

result = "";
v050404_01 = ["item1", "item2", "item3", "item2", "item1"];
v050404_09 = v050404_01.lastIndexOf("item2");
document.getElementById("050404_09").innerHTML = v050404_09;

result = "";
v050404_00 = [2, 3, 5, 1, 2];
v050404_10 = v050404_00.find(function05010410);
document.getElementById("050404_10").innerHTML = v050404_10;
function function05010410(value, index, array) {
  return value > 2;
}

result = "";
v050404_00 = [2, 3, 5, 1, 2];
v050404_11 = v050404_00.findIndex(function05010411);
document.getElementById("050404_11").innerHTML = v050404_11;
function function05010411(value, index, array) {
  return value > 2;
}

const myObject = {
    firstName:"Tom", 
    lastName:"Hanks",
    age:45,
    hobbies: ['music', 'movies'],
    address: {
        street: '42West',
        city: 'Los Angeles',
        state: 'CA'
    },
    getFullName() {
        return "firstName = " + this.firstName 
        + ", lastName = " + this.lastName 
        }
    };
const person = [myObject.firstName, myObject.lastName] ;
const profile = [myObject.firstName, myObject.lastName, myObject.address.state];
document.getElementById("0505_01").innerHTML = `myObject["firstName"] = ${myObject["firstName"]}`;
document.getElementById("0505_02").innerHTML = `myObject.age = ' ${myObject.age}`;
document.getElementById("0505_03").innerHTML = `myObject.hobbies[1] = ' ${myObject.hobbies[1]}`;
document.getElementById("0505_04").innerHTML = `myObject.address.state = ${myObject.address.state}`;
document.getElementById("0505_05").innerHTML = `person = ' ${person}`;
document.getElementById("0505_06").innerHTML = `profile = ${profile}`;
document.getElementById("0505_07").innerHTML = `myObject.getFullName() = ${myObject.getFullName()}`; 
 
let member = {id: "1001", name:"John"};
document.getElementById("05_dp01").innerHTML = `${member.id} ${member.name}`;

let x, txt = "";
for (x in member) {
    txt += member[x] + " ";
}
document.getElementById("05_dp02").innerHTML = txt;

let myArray = Object.values(member);
document.getElementById("05_dp03").innerHTML = myArray;

let myString = JSON.stringify(member);
document.getElementById("05_dp04").innerHTML = myString;

// Date Object 
const v0506_01 = new Date();
const v0506_02 = new Date(2019, 10, 24, 10, 33, 30, 0);
const v0506_03 = new Date(99, 11, 24);
const v0506_04 = new Date(1000000000000);
const v0506_05 = new Date(-1000000000000);
const v0506_06 = new Date("October 15, 2020 11:13:00");
const v0506_07 = new Date().toUTCString();
document.getElementById("0506_01").innerHTML = "new Date() = " + v0506_01;
document.getElementById("0506_02").innerHTML = "new Date(2019, 10, 24, 10, 33, 30, 0) = " + v0506_02;
document.getElementById("0506_03").innerHTML = "new Date(99, 11, 24) = " + v0506_03;
document.getElementById("0506_04").innerHTML = "new Date(1000000000000) = " + v0506_04;
document.getElementById("0506_05").innerHTML = "new Date(-1000000000000) = " + v0506_05;
document.getElementById("0506_06").innerHTML = 'new Date("October 15, 2020 11:13:00") = ' + v0506_06;
document.getElementById("0506_07").innerHTML = 'new Date().toUTCString() = ' + v0506_07;

const v050601_01 = Date.parse("March 10, 2020");;
const v050601_02 = new Date(2019, 10, 24, 10, 33, 30, 0);
const v050601_03 = new Date(99, 11, 24);
document.getElementById("050601_01").innerHTML = 'Date.parse("March 21, 2012"); = ' + v050601_01;
document.getElementById("050601_02").innerHTML = 'Date(2019, 10, 24, 10, 33, 30, 0); = ' + v050601_02;
document.getElementById("050601_03").innerHTML = 'new Date(99, 11, 24); = ' + v050601_03;

// Content 6
function multiply_function(p1, p2){
  return p1 * p2
};
document.getElementById("0600_01").innerHTML = 'multiply_function(2,3) = ' + multiply_function(2,3);
document.getElementById("0600_02").innerHTML = '"Value" + multiply_function(2,3) = ' + "Value" + multiply_function(2,3);
document.getElementById("0600_03").innerHTML = 'multiply_function = ' + multiply_function;
document.getElementById("0600_04").innerHTML = 'multiply_function() = ' + multiply_function();

// Content 8
function function0804_01() {
  document.getElementById("0804_01").style.backgroundColor = "lightgray";
}

document.getElementById("0804_02").onkeydown = function() {function0804_02()};
function function0804_02() {
  document.getElementById("0804_02").style.backgroundColor = "lightgray";
}


// Content 11
let v1105Min, v1105Max;
function function1105(max, min) {
    let v1105Min = document.getElementById("1105_min").value;
    let v1105Max = document.getElementById("1105_max").value;
    return Math.floor((Math.random() * (v1105Max - v1105Min)) + v1105Min);
}

// 11.6
let player1;
let player2;
let matchResult;
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
function randomMath() {
    player1 = getRndInteger(0,5);
    player2 = getRndInteger(0,5);
    if(player1 === player2) {
        matchResult = "Draw!"
    } else if (player1 > player2) {
        matchResult = "Player1 Win!"
    } 
    else {
        matchResult = "Player2 Win!"
    }
}

// 11.7
let nowHour;
let nowMinute;
let nowTime;
let greeting;
function whatTime(){
    nowHour = new Date().getHours();
    nowMinute = new Date().getMinutes();
    nowTime = nowHour + ":" + nowMinute;
    if(nowHour < 13) {
        greeting = "Good morning"
    } else if(nowHour < 19) {
        greeting = "Good afternoon"
    }
    else {
        greeting = "Good evening"
    }    
}

//11.8
let myStock = {
    gold: 0,
    items: []
};
function getReward(myRank) {
    switch (myRank) {
        case "bronze":
            myStock.gold += 100;
            break;
        case "silver":
            myStock.gold += 100;
            myStock.items.push("potion");
            break;
        case "gold":
            myStock.gold += 200;
            myStock.items.push("long sword");
            break;
    }
}

//11.9
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  
  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
  
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  }
  
  function inputDecimal(dot) {
      if (calculator.waitingForSecondOperand === true) return;
    
    // If the `displayValue` does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
      // Append the decimal point
      calculator.displayValue += dot;
    }
  }
  
  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
  
    if (operator && calculator.waitingForSecondOperand)  {
      calculator.operator = nextOperator;
      return;
    }
  
    if (firstOperand == null) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = performCalculation[operator](currentValue, inputValue);
  
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }
  
  const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  
    '=': (firstOperand, secondOperand) => secondOperand
  };
  
  function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
  }
  
  function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
  }
  
  updateDisplay();
  
  const keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
      return;
    }
  
    if (target.classList.contains('operator')) {
      handleOperator(target.value);
          updateDisplay();
      return;
    }
  
    if (target.classList.contains('decimal')) {
      inputDecimal(target.value);
          updateDisplay();
      return;
    }
  
    if (target.classList.contains('all-clear')) {
      resetCalculator();
          updateDisplay();
      return;
    }
  
    inputDigit(target.value);
    updateDisplay();
  });

//11.10
const v1110 = [
    {product:"C", year: 2012}, 
    {product:"B", year: 2010},
    {product:"A", year: 2011}
  ];
displayFunction(v1110, "1110");
function sortProduct(arr) {
    arr.sort(function(a, b){
        var x = a.product.toLowerCase();
        var y = b.product.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    displayFunction(v1110, "1110");
}
function sortYear(arr) {
    arr.sort(function(a, b){return a.year - b.year });
    displayFunction(v1110, "1110");
}
function displayFunction(arr, output) {
    var result = "";
        for (i = 0; i < arr.length; i++){
            result += arr[i].product + " " + arr[i].year + "<br>";
        }
    document.getElementById(output).innerHTML = result
}