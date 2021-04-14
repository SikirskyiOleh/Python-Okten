//  Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
//     b) робить шириниу елементу ul 400px
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
//     d) отримує текст який зберігається в елементі з класом listElement2
//     e) отримує всі елементи li та змінює ім колір фону на сірий
//     f) отримує всі елементи 'a' та додає їм клас anchor
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     l) отримати елементи p та змінити їм padding на 20px
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

//  a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
let mainHeader = document.getElementById('main_header').style.color = '#022021';

// b) робить шириниу елементу ul 400px
let width = document.getElementsByTagName('ul');

for (let i = 0; i < width.length; i++) {
    width[i].style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');

for (let i = 0; i < linkList.length; i++) {
    linkList[i].style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let textList = document.getElementsByClassName('listElement2');

for (let i = 0; i < textList.length; i++) {
    textList[i].textContent;
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
let bacgC = document.getElementsByTagName('li');

for (let i = 0; i < bacgC.length; i++) {
    bacgC[i].style.backgroundColor = 'silver';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let a = document.getElementsByTagName('a');

for (let i = 0; i < a.length; i++) {
    a[i].classList.add('anchor');
}

//  g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let i = 0; i < a.length; i++) {
    if (a[i].textContent === 'link3') {
        a[i].style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let i = 0; i < a.length; i++) {
    a[i].classList.add(`element_${a[i].textContent}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let sub = document.getElementsByClassName('sub-header');

for (let i = 0; i < sub.length; i++) {
    sub[i].style.backgroundColor = `${prompt('Input Background Colour')}`
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (let i = 0; i < sub.length; i++) {
    if (sub[i].textContent === 'content 2 segment')
        sub[i].style.color = `${prompt('Input Text colour')
        }`
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content = document.getElementsByClassName('content_1');

for (let i = 0; i < content.length; i++) {
    content[i].innerText = `${prompt('Input some text')}`;
}

// l) отримати елементи p та змінити їм padding на 20px

let p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
    p[i].style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)\
let text = document.getElementsByClassName('text2');

for (let i = 0; i < text.length; i++) {
    text[i].innerText = 'FEB-2021';
}