// Завдання 1: Потрібно написати функцію, яка повертає максимальний переданий їй числовий параметр.
// Кількість параметрів складає 3 або 4.
// Приклад роботи:
// f(5,-2,10) – має повернути 10;
// f(5,-2,30,6) – має повернути 30;

// console.log(maxNumber(1,2,4,2,10));

// function maxNumber(){
//     arguments;
//     let max = arguments;
//     return Math.max(...arguments);
// }

// Завдання 2: Потрібно написати функцію, яка обраховує суму чисел геометричної прогресії,
// в якій першим числом є 1. 
// Функція приймає два аргументи: кількість чисел прогресії і її знаменник . 
// Наприклад, в прогресії типу 1,2,4,8,16 кількість чисел - 5,
// а знаменник – 2 (тому що кожне наступне число прогресії домножується на 2). 
// Результат, який має повернути функція для даної прогресії 31.
// Функцію  потрібно написати двома способами:
// З використанням циклу
// З використанням формули знаходження суми геометричної прогресії:
// Sn=b1*1-qn1-q,
// де b1 – перший елемент прогресії (в даному завданні це 1),
// q – знаменник,
// n – кількість елементів прогресії
// Приклад роботи:
// f(5,2) – 1+2+4+8+16=31
// f(4,3) – 1+3+9+27=40

/*let n = 5;
let q = 2;
let sum = 1;

console.log(sumArr(n, q));

function sumArr(n, q){
let arr = [1];
//let rez = 1;
for (let i = 1; i < n; i++) {
    sum *= q;
    arr[i] = sum;
    //rez += arr[i];
}
const reducer = (accumulator, currentValue) => accumulator + currentValue;
return arr.reduce(reducer);
//return rez;
}
*/


// Завдання 3: Потрібно написати функцію, в яку передається 2 параметри, які користувач вводить через вікно prompt().
// Потрібно щоб функція виводила діапазон тільки простих чисел console.log(), між тими які ввів користувач.

let array = rangeSimpleNumbers(5, 600);

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

function rangeSimpleNumbers(a, b){
    let arr = [];
    let iterator = 0;
    for (let i = a; i < b; i++) {
        
        if(prost(i)){
            arr[iterator] = i;
            iterator++;
        }
    }
    return arr;
}


function prost(proste){
    if(proste == 0 || proste == 1){
        return false;
    }
for (let i = 2; i < proste; i++) {
    if(proste % i === 0) {
        return false;
    }
}    
    return true;
}








