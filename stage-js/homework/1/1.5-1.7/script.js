//- За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.

let one = prompt('Input number');
let two = prompt('Input number');
let tree = prompt('Input number');

one = Number(one);
two = Number(two);
tree = Number(tree);

console.log(one, two, tree);
//____________________________________________________________________________________

//- За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.

let first = prompt('Input number');
let second = prompt('Input number');
let third = prompt('Input number');
let fourth = prompt('Input number');

let first_int = parseInt(first);
let second_int = parseInt(second);
let third_int = parseInt(third);
let fourth_int = parseInt(fourth);

let result = first_int + second_int + third_int + fourth_int;

console.log(result);
//_____________________________________________________________________________________

//- За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
//    Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.

let first = prompt('Input number with point');
let second = prompt('Input number with point');
let third = prompt('Input number with point');
let fourth = prompt('Input number with point');

let first_int = parseFloat(first);
let second_int = parseFloat(second);
let third_int = parseFloat(third);
let fourth_int = parseFloat(fourth);

let result = first_int + second_int + third_int + fourth_int;

console.log(result);