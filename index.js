//Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"


// 1.пременная
// 2. ввод

// const userInput = prompt("Какое официальное название JavaScript?");
// const NAMEJS = 'ecmascript';

// // if ( userInput.toLowerCase() === NAMEJS) {
// //     alert("Верно!");
    
// // } else {
// //     alert("Не знаете? ECMAScript!")
// // }
// const comparison = userInput.toLowerCase() === NAMEJS;
// const message = comparison ? "Верно!" : "Не знаете? ECMAScript!";
// alert(message);

//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const userInput = prompt('Введите количество минут');
// const hours = Math.floor(userInput / 60);
// const modifyHours = String(hours).padStart(2, 0);

// const minutes = userInput % 60;

// const modifyMinutes = String(minutes).padStart(2, 0);

// console.log(`${modifyHours}:${modifyMinutes}`);

//3. Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные числа от min до max


// const max = 50;
// const min = 23;
// let total = 0;
// for (let i = max; i >= min; i-=1) {

//     if (i % 2 !== 0) {
//         continue;
//     }
//      total += i;
// }
// console.log(total);

// /4. Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывксти строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const loginInput = prompt("Введите свой логин");

// if (loginInput === 'Админ') {
//     const passInput = prompt("Введите свой пароль");

//     if (passInput === 'Я главный') {
//         console.log("Здравствуйте!");
//     }
//     else if (passInput === null) {
//     console.log("Отменено");

// }
//     else {
//         console.log("Неверный пароль!");
//     }


// } else if (loginInput === null) {
//     console.log("Отменено");

// }
// else {
//     console.log("Я вас не знаю");
// }


// switch(loginInput){
//     case "Админ":
//         const passInput = prompt("Введите свой пароль");
//         switch (passInput) {
//             case 'Я главный':
//                 console.log("Здравствуйте");
//                 break;

//             case null:
//                 console.log("Отменено");
//                 break;

//             default: console.log("Неверный пароль!");
// }

//         break;

//     case null:
//         console.log("Отменено");
//         break;

//     default: console.log("Я вас не знаю");
// }

// При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.


let userInput = prompt("Введите число");
let total = 0;
let check = false;
// while (userInput) {
//     total += Number(userInput);
//     userInput = prompt("Введите число");
//     console.log(total);
// }

do {
    if (userInput) {
        check = true;
        total += Number(userInput);
    userInput = prompt("Введите число");
    console.log(total);
    } else {
        check = false;
        // console.log(total);
    }
} while (check);

