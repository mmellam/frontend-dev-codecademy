let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');



let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');
let img6 = document.getElementById('img6');
let img7 = document.getElementById('img7');

let message = document.getElementById('message');
let choiceOne = document.getElementById('choice1');
let choiceTwo = document.getElementById('choice2');
let choiceThree = document.getElementById('choice3');


img1.hidden = true;
img2.hidden = true;
img3.hidden = true;
img4.hidden = true;
img5.hidden = true;
img6.hidden = true;
img7.hidden = true;
button4.hidden = true;
message.hidden = true;

function display1(event) {
    img1.hidden = false;
    img2.hidden = false;
    button1.style.backgroundColor = 'teal';

}

button1.onclick = display1;

function display2(event) {
    img3.hidden = false;
    img4.hidden = false;
    button2.style.backgroundColor = 'teal';

}

button2.onclick = display2;

function display3(event) {
    img5.hidden = false;
    img6.hidden = false;
    button3.style.backgroundColor = 'teal';


}

button3.onclick = display3;



img1.onclick = function() {
    img2.hidden = true;
    img1.style.border = '10px solid aquamarine';
    img1.style.borderRadius = '10px';
    img1.style.width = '35%';
    img1.style.height = '35%';
    choiceOne.innerHTML = 'Ballons! Wow!';
}

img2.onclick = function() {
    img1.hidden = true;
    img2.style.border = '10px solid aquamarine';
    img2.style.borderRadius = '10px';
    img2.style.width = '35%';
    img2.style.height = '35%';
    choiceOne.innerHTML = '***Sparkles!***';
}

img3.onclick = function() {
    img4.hidden = true;
    img3.style.border = '10px solid aquamarine';
    img3.style.borderRadius = '10px';
    img3.style.width = '35%';
    img3.style.height = '35%';
    choiceTwo.innerHTML = 'Oh sweet berries! Nom nom';
}
img4.onclick = function() {
    img3.hidden = true;
    img4.style.border = '10px solid aquamarine';
    img4.style.borderRadius = '10px';
    img4.style.width = '35%';
    img4.style.height = '35%';
    choiceTwo.innerHTML = 'CHOCOLATEY CHOCCC';
}
img5.onclick = function() {
    img6.hidden = true;
    img5.style.border = '10px solid aquamarine';
    img5.style.borderRadius = '10px';
    img5.style.width = '35%';
    img5.style.height = '35%';
    choiceThree.innerHTML = 'Fruity fun it is!';
    button4.hidden = false;
}
img6.onclick = function() {
    img5.hidden = true;
    img6.style.border = '10px solid aquamarine';
    img6.style.borderRadius = '10px';
    img6.style.width = '35%';
    img6.style.height = '35%';
    choiceThree.innerHTML = 'Beach flavor all day!';
    button4.hidden = false;
}

function display4(event) {
    button4.style.backgroundColor = 'teal';
    message.hidden = false;
    img7.hidden = false;
    img7.scrollIntoView();

}

button4.onclick = display4;



