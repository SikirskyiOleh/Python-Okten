// - За допомогою prompt() отримати 2 цілих числа.
//    Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//    За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//    Example. Число 1 = 5. Число 2 = 2. Результат = 25

let one = prompt('Input number');
let two = prompt('Input number');

let result = Math.pow(one, two);

console.log(result);

