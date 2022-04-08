//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles[1] = 'Классика';
// // styles.splice(1, 1, 'Классика');
// // styles.shift();
// console.log(styles.shift());
// styles.unshift('Рэп', 'Регги');
// console.log(styles);

// styles.unshift('Рэп', 'Регги');

//=====================
//Напишите функцию min(a, b), которая возвращает
//меньшее из чисел a, b
//нужно добавить проверку, что функция получает числа


// const minNumber = function (a, b) {
//     // if (a > b) {
//     //     return b;
//     // }
//     // else {
//     //     return a;
//     // }
//     if (typeof a !== 'number' && typeof b !== 'number') {
//         return 'one of the arguments is string';
//     }
//     return a > b ? b : a;
    
// }
// console.log (minNumber('this is another string', 11))




//Напишите функцию logItems(array) которая принимает
//массив и использует цикл for, который для каждого
//элемента массива будет выводить сообщение в формате
//<номер элемента> - <значение элемента>
//Нумерация элементов должна начинаться с 1.


// function logItems(array){
// for(let i = 0; i<array.length; i+=1){
//     console.log(`Номер элемента ${i + 1} значение элемента ${array[i]}`);
// }
// }

// logItems(['Джаз', 'Блюз', 'Рок-н-ролл', 'Регги', 'Рэп'])


// const styles = ['Джаз', 'Джаз','Блюз', 'Рок-н-ролл', 'Регги', 'Рэп'];
// const filteredStyles = styles.filter((element, index, array) => array.indexOf(element) === index);
// console.log(filteredStyles);
// const d =`test`;
// const f ={};

// const a = {
//     b:1,
//     c:2

// }
// a[`d`] = d;
// a[`f`] = 4;
// console.log(a);

//Напиши функцию findSmallerNumber(numbers)
//которая ищет самое маленькое число в массиве
// Добавь проверку что функция получает массив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3, 1];

// const findSmallerNumber = (numbers) => {
//     // return Math.min(...numbers)
//     let minNumber = numbers[0]
//     for (const number of numbers) {
//         if (minNumber > number) {
//            minNumber = number
//        }
//     }
//     return minNumber

// }
// console.log(findSmallerNumber(numbers));

//Напишите функцию caculculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

const caculculateAverage = (...numbers) => {
    console.log(numbers)
    
    let total = 0;
    let count = 0;
    for (const number of numbers) {
        if (typeof number !== 'number') {
            continue
        }
        total += number;
        count += 1;
    }

    console.log(total/ count)
}

caculculateAverage(2, 4, 3, 7, "a", "c","b");