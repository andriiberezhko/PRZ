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


// let userInput = prompt("Введите число");
// let total = 0;
// let check = false;
// // while (userInput) {
// //     total += Number(userInput);
// //     userInput = prompt("Введите число");
// //     console.log(total);
// // }

// do {
//     if (userInput) {
//         check = true;
//         total += Number(userInput);
//     userInput = prompt("Введите число");
//     console.log(total);
//     } else {
//         check = false;
//         // console.log(total);
//     }
// } while (check);

//7. Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должет спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt

// let inputUser = prompt('Введите число больше 100');

// while (inputUser < 100 && inputUser !== null) {
//     inputUser = prompt('Введите число больше 100');
// }

// console.log(`Вы ввели ${inputUser}`);

// В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).
// var min = 10;
// if (min >= 0 && min <= 15) {
//     console.log(`${min} находится в первой четверти`);
// }
// if (min >= 16 && min <= 30) {
//     console.log(`${min} находится во второй четверти`);
// }
// if (min >= 31 && min <= 45) {
//     console.log(`${min} находится в третьей четверти`);
// }
// if (min >= 46 && min <= 59) {
//     console.log(`${min} находится в четвертой четверти`);
// }




// Елси число делиться на 3 возвращать
//fizz если делиться на 5 возвращать buzz
//елси делиться на 3 и на 5 возвращить fizzbuzz

// fizzBuzz(15);
// function fizzBuzz(num) {
    
//    if (num % 3 === 0 && num % 5 === 0) {
//        console.log('fizzbuzz');
//     }
//    else if (num % 3 === 0) {
//       console.log('fizz'); 
//     }
//    else if (num % 5 === 0) {
//         console.log('buzz'); 
//     }
    
// }

