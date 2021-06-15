const messageObj = {
    sign: ["earth", "water", "fire", "wind"],
    number: [2, 3, 4, 5],
    action: ["lucky", "happy", "intriguing", "jolly"],
    situation: ["meetings", "conversations", "encounters", "discussions"],
    date: new Date().getFullYear(),
}


const randomizer = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const message = `Hello Stranger! 
Your sign is ${randomizer(messageObj.sign)}. 
Your lucky number is ${randomizer(messageObj.number)}. 
This means that I predict that you will have ${randomizer(messageObj.number)} ${randomizer(messageObj.action)} ${randomizer(messageObj.situation)} on this day in ${messageObj.date}.`;
console.log(message);