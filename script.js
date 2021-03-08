const sign = ["earth", "water", "fire", "wind"];
const number = [2, 3, 4, 5];
const action = ["lucky", "happy", "intriguing", "jolly"];
const situation = ["meetings", "conversations", "encounters", "discussions"];

const randomizer = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const message = `Hello Stranger! Your sign is ${randomizer(sign)}.`;
console.log(message);