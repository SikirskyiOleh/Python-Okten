// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"
//     b) отримує текст з блоку з id "rules"
//     c) замініть текст параграфа з id 'content' на будь-який інший
//     d) замініть текст параграфа з id 'rules' на будь-який інший
//     e) змініть кожному елементу колір фону на червоний
//     f) змініть кожному елементу колір тексту на синій
//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//     h) отримати всі елементи з класом fc_rules
//     i) поміняти колір тексту у всіх елементів fc_rules на червоний

// a)
let idContent = document.getElementById("content");
let textId = idContent.textContent;

// b)
let  idRules = document.getElementById('rules');
let textID = idRules.textContent;

// c)
idContent.innerText = 'Some text';

// d)
idRules.innerText = 'Hello world';

// e)
let colour = document.getElementById('content').style.backgroundColor = 'red';
let colour1 = document.getElementById('rules').style.backgroundColor = 'red';
let colour2 = document.getElementsByTagName('ul');

for (let i = 0; i < colour2.length; i++) {
    colour2[i].style.backgroundColor = 'red';
}

// f)
let colourText = document.getElementById('content').style.color = 'blue';
let colourText1 = document.getElementById('rules').style.color = 'blue';

for (let i = 0; i < colour2.length; i++) {
    colour2[i].style.color = 'blue';
}

// g)
let id = document.getElementById('rules');
console.log(id.classList);

// h)
let clas = document.getElementsByClassName('fc_rules');

// i)
for (let i = 0; i < clas.length; i++) {
    clas[i].style.color = 'red';
}