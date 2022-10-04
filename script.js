"use strict";

const name = "Joshua DeHaan";
let age = 25;
const birthday = "October 9";
let pineapplePizza = true;
let lifeEvents = [
  "I got married",
  "I graduated college",
  "I finished Elden Ring",
  "I obtained cats",
];

// [] = Array
// {} = Object

if (pineapplePizza === true) {
  console.log(
    `My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5===5 it took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}

let hours = 80;
let wage = 10;

if (hours < 40) {
  console.log(wage * hours);
} else {
  let normalPay = wage * 40;
  let overtimeHours = hours - 40;
  let overtimePay = wage * 1.5;
  console.log(normalPay + overtimeHours * overtimePay);
}
