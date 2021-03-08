const sign = ["earth", "water", "fire", "wind"];
const number = [2, 3, 4, 5];
const action = ["lucky", "happy", "intriguing", "jolly"];
const situation = ["meetings", "conversations", "encounters", "discussions"];
const date = new Date().getFullYear();

const randomizer = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const message = `Hello Stranger! 
Your sign is ${randomizer(sign)}. 
Your lucky number is ${randomizer(number)}. 
This means that I predict that you will have ${randomizer(number)} ${randomizer(action)} ${randomizer(situation)} on this day in ${date}.`;
console.log(message);