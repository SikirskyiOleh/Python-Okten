// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання

class BasicComputer {
    constructor(ram, cpu, name) {
        this.ram = ram;
        if (cpu < 0 || cpu > 1000) {
            console.log('Wrong cpu');
        } else {
            this.cpu = cpu;
        }
        this.name = name;
    }

    on() {
        console.log(`Computer ${this.name} is on`);
    }
}

// let s = new BasicComputer(12, 100, 'Apple');
// console.log(s);

// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.

class Laptop extends BasicComputer {
    constructor(ram, cpu, name, diagonal) {
        super(ram, cpu, name);
        this.diagonal = diagonal;
    }

    // У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

    battery() {
        const battery = (this.cpu / (this.diagonal * this.ram));
        return battery;
    }
}

// let l = new Laptop(100, 20, 'Acer', 2);
// console.log(l.battery());

// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

class Ultrabook extends Laptop {
    constructor(ram, cpu, name, diagonal, weight) {
        super(ram, cpu, name, diagonal);
        this.weight = weight;
    }

    on() {
        if (this.weight > 2) {
            console.log(`Ultrabook ${this.name} is too weight`);
        } else if (this.battery() < 4) {
            console.log(`Ultabook ${this.name} have bad battery`);
        } else {
            console.log(`Ultrabook ${this.name} is on`);
        }
    }
}

// let u = new Ultrabook(2, 999, 'HP', 13, 1);
// console.log(u.on());

// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

class PC extends BasicComputer {
    constructor(ram, cpu, name) {
        super(ram, cpu, name);
    }

    playGame(gameName) {
        const fps = (this.cpu / this.ram);
        console.log(`You are playing ${gameName} with ${fps} FSP`);
    }

    // Компютер можна апгрейдити.
    // Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
    // Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
    // Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

    upgradeCpu(howMany) {
        const rate = (this.cpu / 100);
        if (howMany <= 10 && howMany > 0) {
            this.cpu = (this.cpu + (rate * howMany));
        } else {
            console.log('U can upgrade cpu only 1-10%');
        }
    }

    upgradeRam(howMany) {
        if (howMany <= 2 && howMany > 0) {
            this.ram = (this.ram * howMany);
        } else {
            console.log('U can upgrade ram only 2 times');
        }
    }
}

// let p = new PC(10, 100, 'Lenovo');
//console.log(p.playGame('RDR2'));
// p.upgradeCpu(120);
// p.upgradeRam(2);
// console.log(p);

// Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

class GamingPc extends PC {
    constructor(ram, cpu, name) {
        super(ram, cpu, name);
    }

    playGame(gameName) {
        if (this.cpu >= 500 && this.ram >= 8) {
            const fps = ((this.cpu / this.ram) * 2);
            const rate = (this.cpu / 1000);
            this.cpu = (this.cpu - rate);
            console.log(`You are playing ${gameName} with ${fps} FSP`);
        }else{
            console.log(`U can't play on this ${this.name} GamingPc`);
        }
    }
}

// let g = new GamingPc(6, 100, 'Samsung');
// console.log(g.playGame('Detroit'));
// console.log(g);