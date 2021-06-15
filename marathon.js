/*
Program that will register runners for the race and give them instructions on race day. 
*/

let raceNumber = Math.floor(Math.random() * 1000);

let earlyReg = false;
let age = 18;

if (earlyReg === true && age > 18) {
  raceNumber += 1000;
}

if (age > 18 && earlyReg === true) {
  console.log(`You with #${raceNumber} will race at 9:30am!`);
} else if (age > 18 && earlyReg === false) {
  console.log(`You with #${raceNumber} will race at 11:00am!`);
} else if (age < 18) {
console.log(`You with #${raceNumber} will race at 12:30pm!`);
}
else {
  console.log(`see registration`);
}

