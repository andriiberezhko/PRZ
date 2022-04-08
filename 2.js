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


const minNumber = function (a, b) {
    // if (a > b) {
    //     return b;
    // }
    // else {
    //     return a;
    // }
    if (typeof a !== 'number' && typeof b !== 'number') {
        return 'one of the arguments is string';
    }
    return a > b ? b : a;
    
}
console.log (minNumber('this is another string', 11))