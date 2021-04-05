// 2)За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement.
//    Вставити цей блок на сторінку

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// for (let i = 0; i < users.length; i++) {
//     let a = document.createElement('div');
//     a.innerHTML = `
//   Name: ${users[i].name} <br>
//   Age: ${users[i].age} <br>
//   Status: ${users[i].status} <br>
//   Address: ${users[i].address.city}, ${users[i].address.country}, ${users[i].address.street}, ${users[i].address.houseNumber}`
//
//     document.body.appendChild(a);
// }


// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (let i = 0; i < users.length; i++) {
    let w = document.createElement('div');
    w.innerHTML = `
  Name: ${users[i].name} <br>
  Age: ${users[i].age} <br>
  Status: ${users[i].status} <br>
  `
    let e = document.createElement('div');
    e.innerHTML = `
    Address: ${users[i].address.city}, ${users[i].address.country}, ${users[i].address.street}, ${users[i].address.houseNumber}`

    document.body.appendChild(w);
    document.body.appendChild(e);
}
