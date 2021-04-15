//  Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//  максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car(model, made, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.made = made;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//
//     this.drive = function () {
//         console.log(`Drive with speed ${this.maxSpeed} per hours`)
//     }
//
//     this.info = function () {
//          console.log(`Model: ${this.model}, made: ${this.made}, year ${this.year}, max speed: ${this.maxSpeed}, engine capacity: ${this.engineCapacity}`);
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
//     this.addDriver = function (driver){
//         Car.driver = driver;
//         console.log(`Driver: ${driver}`)
//     }
//
// }

// let s = new Car('Volvo', 'Germany', 2001, 210, 3.4);
// s.drive();
// s.info();
// s.increaseMaxSpeed(10);
// s.info();
// s.changeYear(2004);
// s.info();
// s.addDriver('Oleh');

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor(model, made, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.made = made;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive() {
//         console.log(`Drive with speed ${this.maxSpeed} per hours`)
//     }
//
//     info() {
//         console.log(`Model: ${this.model}, made: ${this.made}, year ${this.year}, max speed: ${this.maxSpeed}, engine capacity: ${this.engineCapacity}`);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(driver) {
//         Car.driver = driver;
//         console.log(`Driver: ${driver}`)
//     }
//
// }

// let s = new Car('Volvo', 'Germany', 2001, 210, 3.4);
// s.drive();
// s.info();
// s.increaseMaxSpeed(240);
// s.info();
// s.changeYear(2004);
// s.info();
// s.addDriver('Oleh');

// створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let c = [
//     new Cinderella('One', 15, 28),
//     new Cinderella('Two', 21, 34),
//     new Cinderella('Three', 16, 30),
//     new Cinderella('Four', 18, 29),
//     new Cinderella('Five', 15, 31),
//     new Cinderella('Six', 19, 33),
//     new Cinderella('Seven', 14, 27),
//     new Cinderella('Eight', 20, 32),
//     new Cinderella('Nine', 16, 26),
//     new Cinderella('Ten', 17, 35)
// ];
//
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
//
// let p = new Prince('Prince', 25, 29);
//
// for (let i = 0; i < c.length; i++) {
//     if (c[i].footSize === p.shoe) {
//         console.log(`Welcome ${c[i].name}, U will be with ${p.name}`);
//     }
//
// }

// створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// let c = [];
// c.push(new Cinderella('One', 15, 28));
// c.push(new Cinderella('Two', 21, 34));
// c.push(new Cinderella('Three', 16, 30));
// c.push(new Cinderella('Four', 18, 29));
// c.push(new Cinderella('Five', 15, 31));
// c.push(new Cinderella('Six', 19, 33));
// c.push(new Cinderella('Seven', 14, 27));
// c.push(new Cinderella('Eight', 20, 32));
// c.push(new Cinderella('Nine', 16, 26));
// c.push(new Cinderella('Ten', 17, 35));
//
// function Prince(name, age, shoe) {
//     this.name = name;
//     this.age = age;
//     this.shoe = shoe;
//
//     this.findCinderella = function ([cinderella]) {
//         for (let i = 0; i < cinderella.length; i++) {
//             if (cinderella[i].footSize === this.shoe) {
//                 console.log(`Welcome ${cinderella[i].name}, U will be with ${this.name}`);
//             }
//         }
//     }
// }
//
// let p = new Prince('Arthur', 24, 34);
// p.findCinderella([c]);