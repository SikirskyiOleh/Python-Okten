const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

// -- Відсортувати їх по ID
let minMax = [];
minMax = usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(minMax);

// -- Відсортувати їх по ID в зворотньому порядку
let maxMin = [];
maxMin = usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(maxMin);

// -- Відсортувати по віку
let age = [];
age = usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(age);

// -- Відсортувати по віку в зворотньому порядку
let ageR = [];
ageR = usersWithAddress.sort((a, b) => b.age - a.age);
// console.log(ageR);

// -- Відсорутвати по імені
let names = usersWithAddress.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    return -1;
});
// console.log(names);

// -- Відсорутвати по назві вулиці
let street = usersWithAddress.sort((a, b) => {
    if (a.address.street > b.address.street) {
        return 1;
    }
    return -1;
});
// console.log(street);

// -- Відсорутвати по номеру будинку
let numb = usersWithAddress.sort((a, b) => a.address.number - b.address.number);
// console.log(numb);

// -- Залигити тільки тих, хто молодший ніж 30 (filter)
let old = usersWithAddress.filter((v) => v.age > 30);
// console.log(old);

// -- Залишити тільки одружених
let married = usersWithAddress.filter((v) => v.isMarried === true);
// console.log(married);

// -- Залишити тільки одружених, які молодні за 30
let marriedYoung = usersWithAddress.filter((v) => v.isMarried === true && v.age < 30);
// console.log(marriedYoung);

// -- Залишити лише тих, в кого парні номери будинків.
let numbs = usersWithAddress.filter((v) => v.address.number % 2 === 0);
// console.log(numbs);

// -- Порахувати загальний вік всіх людей. (reduce)
let allAge = usersWithAddress.reduce((acc, v) => {
    return acc + v.age;
}, 0);
// console.log(allAge);

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
let some = usersWithAddress.reduce((acc, v) => {
    if (v.isMarried === true && v.age > 30) {
        v.child = true;
        acc.push(v);
    }
    return acc;
}, []);
// console.log(some);