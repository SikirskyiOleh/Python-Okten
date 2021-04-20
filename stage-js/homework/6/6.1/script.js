// 1) Створити масив з 20 чисел

let arr = [12, 3, 55, 0, 111, 30, 23, 1, 5, 99, 9, 65, 34, 29, 76, 14, 11, 43, 10, 2];

// a) відсортувати його від меншого до більшого.
let minMax = arr.sort((a, b) => a - b);
// console.log(minMax);

// b) відсортувати його від більшого до меншого.
let maxMin = arr.sort((a, b) => b - a);
// console.log(maxMin);

// c) Відфілтрувати числа які є кратними 3.
let aliquotThree = arr.filter((a) => a % 3 === 0);
// console.log(aliquotThree);

// d) Відфілтрувати числа які є більшими за 10.
let moreTen = arr.filter((a) => a > 10);
// console.log(moreTen);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
arr.forEach(value => document.write(value + ' '));

// f) За допомогою map збільшити кожен елемент в масиві в три рази.
let map = arr.map(value => value * 3);
// console.log(map);

// g) Порахувати загальну суму всіх елментів у масиві (reduce)
let reduce = arr.reduce((acc, cV) => acc + cV);
// console.log(reduce);