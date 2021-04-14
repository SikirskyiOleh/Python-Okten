// -1 створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function func() {
//     let max = arguments[0];
//     let min = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         } else if (arguments[i] < min) {
//             min = arguments[i];
//         }
//     }
//
//     console.log(max);
//     return min;
// }
//
// func(89, 44, 111, 1123, 1);

// -2 Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

// function val(arr) {
//     let ar = [];
//
//     let pr = prompt('Повернути: 1 - масив ключів, 2 - масив значень');
//
//     if (pr === '1') {
//         for (let i = 0; i < arr.length; i++) {
//             ar = Object.keys(arr[i]);
//         }
//     } else if (pr === '2') {
//         for (let i = 0; i < arr.length; i++) {
//             ar = Object.values(arr[i]);
//         }
//     }
//     return ar;
// }
//
// let s = val([{name: 'Oleh', age: 20}]);
// console.log(s);

// -3 Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// function swap(arr, i) {
//     arr[i] = arr.splice(i + 1, 1, arr[i])[0];
//     return arr;
// }
//
// let q = swap([1, 2, 3, 4], 1);
//console.log(q);

// -4 Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100

// function zeroToEnd(arr) {
//     let count = 0;
//     if (arr.length < 2 || arr.length > 100) {
//         console.log('Array length is wrong')
//     } else {
//         for (let i = 0; i < arr.length; i++)
//             if (arr[i] != 0)
//                 arr[count++] = arr[i];
//
//         while (count < arr.length)
//             arr[count++] = 0;
//     }
// }
//
// let arr = [1, 9, 8, 0, 4, 0, 0, 2, 7, 0, 6, 0, 9];
// zeroToEnd(arr);
//
// for (let i = 0; i < arr.length; i++)
//     console.log(arr[i] + " ");

// -5 - Дано список імен.

let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд


// function f(names) {
//     let secondArr = [];
//     names.trim();
//
//     let arr = names.split(' ');
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > 2) {
//             secondArr.push(arr[i]);
//         }
//     }
//     console.log(secondArr.join(' '));
// }
//
// f(n1);
// f(n2);
// f(n3);
