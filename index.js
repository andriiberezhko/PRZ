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


const max = 50;
const min = 23;
let total = 0;
for (let i = max; i >= min; i-=1) {

    if (i % 2 !== 0) {
        continue;
    }
     total += i;
}
console.log(total);