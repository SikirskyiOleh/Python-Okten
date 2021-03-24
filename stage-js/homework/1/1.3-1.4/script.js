//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//    Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років"

let name = prompt('Input your name');
let middleName = prompt('Input your middle name');
let age = prompt('Input your age');

let output = alert("Вітаю: " + name + " " + middleName + "." + " Тобі: " + age);

//________________________________________________________________________________________________________
// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).

let concatenation = name + middleName + age;
console.log(concatenation);