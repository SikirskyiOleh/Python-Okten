// 2) Створити масив з 20 стрічок

let arr = ['Darren', 'Honey', 'Safiyyah', 'Natalie', 'Archie', 'Terence', 'Dan', 'Lavinia', 'Sophie-Louise',
    'Saoirse', 'Pauline', 'Serenity', 'Edwin', 'Rhiann', 'Kennedy', 'Jen', 'Asha', 'Lily-Rose', 'Lyn', 'Kasim'];

// a) Відсортувати його в алфавітному порядку
let az = arr.sort();
// console.log(az);

// b) Відсортувати в зворотньому порядку
let za = arr.sort((a, b) => {
    if (a < b) {
        return 1;
    }
    return -1;
});
// console.log(za);

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
let four = arr.filter((a) => {
    if (a.length > 4) {
        return 1;
    }
});
// console.log(four);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
arr.forEach((value) => {
    console.log(`Sam says ${value}`);
});