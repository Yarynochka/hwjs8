// function square(a,b) {
//     let resul = (a+b)*2;
//     return resul;
// }
// console.log(square(100,200));

// function squareR (r, p=3.14){
//     let result = r*p;
//     return result;
// }
// let squ = squareR(20);
// console.log(squ);

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

// function iterator (arr){
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         console.log(arrElement);
//
//     }
// }
// let b = iterator(users);
// console.log(b);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function para (text){
//     document.write(`<p>${text}</p>`)
// }
// para('hello, wth');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function li (text){
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
// li('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function liNum(text,num){
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         let textElement = text[i];
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
// liNum(`dfvjjvd`, 5)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let someArray = ['hello' , 12, true]
// function list (array){
//     document.write(`<ol>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ol>`)
// }
// list(someArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {
//         id: 1,
//         name: 'Yaryna',
//         age: '45'
//     },
//     {
//         id: 2,
//         name: 'Aryna',
//         age: '20'
//     }
// ]
// function inf (array){
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</div>`)
//     }
// }
// inf(users);
// - створити функцію яка повертає найменьше число з масиву
// let c =[11,2,0,-7,-10,5,1]
// function minNum(array) {
//     let m = array[0];
//     for (const minElement of array) {
//         if (m>minElement) {
//             m=minElement;
//         }
//     }
//     return m;
// }
// console.log(minNum(c));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let c =[11,2,0,-7,-10,5,1]
// function sumArr (array) {
//     let sum=0;
//     for (let arrayElement of array) {
//         sum+=arrayElement;
//     }
//     return sum;
// }
// let p=sumArr(c);
// console.log(p);