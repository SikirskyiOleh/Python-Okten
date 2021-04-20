// 3) Все робити тільки за допомогою методів масивів!
// Дано масив :
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];

// a) відсортувати його за  віком (зростання , а потім окремо спадання)
let minMax = users.sort((a, b) => a.age - b.age);
// console.log(minMax);

let maxMin = users.sort((a, b) => b.age - a.age);
// console.log(maxMin);

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let minL = users.sort((a, b) => {
    if (a.name.length > b.name.length) {
        return 1;
    }
    return -1;
});
// console.log(minL);

let maxL = users.sort((a, b) => {
    if (a.name.length < b.name.length) {
        return 1;
    }
    return -1;
});
// console.log(maxL);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)
let arr = [];
arr = users.map((value, index) => {
    return {
        id: index + 1,
        value
    };
});
// console.log(arr);

// d) відсортувати його за індентифікатором
arr.sort((a, b) => a.id - b.id);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
let arrMarried = [];

arrMarried = arr.reduce((acc, v) => {
    if (v.value.isMarried === true) {
        v.apartment = true;
        arrMarried.push(v);
    }
    return arrMarried
}, []);
// console.log(arrMarried);