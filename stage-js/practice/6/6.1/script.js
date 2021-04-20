const cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];

//Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
let arr = [];
arr = cars.filter((v) => v.volume > 3);
// console.log(arr);

// - двигун = 2л
arr = cars.filter((v) => v.volume === 2);
// console.log(arr);

// - виробник мерс
let mers = "mercedes"
arr = cars.filter((v) => v.producer === mers);
// console.log(arr);

// - двигун більше 3х літрів + виробник мерседес
arr = cars.filter((v) => v.volume > 3 && v.producer === mers);
// console.log(arr);

// - двигун більше 3х літрів + виробник субару
let subarik = "subaru"
arr = cars.filter((v) => v.volume > 3 && v.producer === subarik);
// console.log(arr);

// - сили більше ніж 300
arr = cars.filter((v) => v.power > 300);
// console.log(arr);

// - сили більше ніж 300 + виробник субару
arr = cars.filter((v) => v.power > 300 && v.producer === subarik);
// console.log(arr);

// - мотор серіі ej
arr = cars.filter((v) => v.engine.startsWith('ej'));
// console.log(arr);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
arr = cars.filter((v) => v.power > 300 && v.producer === subarik && v.engine.startsWith('ej'));
// console.log(arr);

// - двигун меньше 3х літрів + виробник мерседес
arr = cars.filter((v) => v.volume < 3 && v.producer === mers);
// console.log(arr);

// - двигун більше 2л + сили більше 250
arr = cars.filter((v) => v.volume > 2 && v.power > 250);
// console.log(arr);

// - сили більше 250  + виробник бмв
let bmw = "bmw";
arr = cars.filter((v) => v.power > 250 && v.producer === bmw);
// console.log(arr);