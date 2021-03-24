// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS").
// Просумувати їх між собою. Результат вивести в консоль.

let first = prompt('Input first number with point');
let second = prompt('Input second number with point');
let third = prompt('Input third number with point');

first = Math.round(first);
second = Math.round(second);
third = Math.round(third);

let result = first + second + third;

console.log(result);