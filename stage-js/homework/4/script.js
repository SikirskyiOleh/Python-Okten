// -1) створити функцію яка приймає масив та виводить його

function arrOut() {
    for (const argument of arguments) {
        console.log(argument)
    }
}

//arr();
//_____________________________________________________

// -2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

function f(min, max) {
    for (let i = 0; i < 15; i++) {
        arrOut(Math.random() * (max - min) + min);
    }
}

//f(0, 500);
//________________________________________________________________

// -3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function min(one, two, three) {

    if (one < two && one < three) {
        arrOut(one);
    } else if (two < one && two < three) {
        arrOut(two);
    } else {
        arrOut(three);
    }
}

//min(10, 12, 100);
//____________________________________________________________________

// -4)  створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function max(one, two, three) {
    let max = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return arrOut(max);
}

//max(121, 1022, 11111);
//________________________________________________________________

// -5) створити функцію яка повертає найбільше число з масиву

function maxArr(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return arrOut(max);
}

//maxArr([13, 11, 100]);
//____________________________________________________________________

// -6) створити функцію яка повертає найменьше число з масиву

function minArr(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return arrOut(min);
}

// minArr([122, 12, 99]);
//_________________________________________________________________________

// -7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

function func(arr) {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
    }

    arrOut(sum);
}

//func([10, 3, 2, 5, 333]);
//___________________________________________________________________________

// -8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function funcS(arr) {
    let sum = arr[0];
    let s = arr.length;
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
    }

    arrOut(sum / s);
}

//funcS([10, 3, 2, 5, 1]);
//____________________________________________________________________________

// -9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

function keys(arr) {
    let k = [];

    for (let i = 0; i < arr.length; i++) {
        k = Object.keys(arr[i]);
    }
    arrOut(k)
}

//keys([{name: 'Oleh', age: 22}]);
//__________________________________________________________________________

// -10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

function val(arr) {
    let k = [];

    for (let i = 0; i < arr.length; i++) {
        k = Object.values(arr[i]);
    }
    arrOut(k)
}

//val([{name: 'Oleh', age: 22}]);
//__________________________________________________________________________

// -11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

function arrSum(arr1, arr2) {
    let sum = [];

    let s;

    if (arr1.length > arr2.length) {
        s = arr1.length
    } else {
        s = arr2.length
    }

    for (let i = 0; i < s; i++) {
        sum[i] = arr1[i] + arr2[i];
    }

    arrOut(sum);
}

//arrSum([10, 5, 1, 2], [10, 10, 9, 2]);