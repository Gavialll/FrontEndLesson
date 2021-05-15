// Написати функцію, що повертає суму елементів у масиві. 
//sum(arr) => 20

let arr = [2, 3, 5, 10];

console.log(arrSum(arr));

function arrSum(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum;
}


// Написати функцію, що вставляє елементи в існуючий масив. 
// Приймає аргументами:
// 1) масив, в який потрібно вставити) 
// 2) масив, котрий саме повинен бути вставлений
// 3) позицію з якої треба вставити масив
// В кінці в результаті повертає масив з вставленими даними.
// addArrAfterPos(arr, arrToPaste, 4) => [2,3,4,5,6,7,8,9,10,11,12,13]

let arr1 = [2, 3, 4, 5, 10, 11, 12, 13];
let arrToPaste = [6, 7, 8, 9];

console.log(addToArray(arr1, arrToPaste, 4));

function addToArray(arr, arrToPaste, addIndex) {
    arrToPaste.sort;
    for (let index = arrToPaste.length - 1; index >= 0; index--) {
        arr.splice(addIndex, 0, arrToPaste[index]);
    }
    return arr;
}


// Написати функцію, що повертає позицію елементу в масиві, якщо таке існує.
// let arr = [1,2,3,4,5,6];
// getPosOfArr(arr, 4);  => 3
// getPosOfArr(arr, 10) => `Немає такого елементу`

let arr2 = [1, 2, 3, 4, 5, 6];

console.log(getPosOfArr(arr2, 10));

function getPosOfArr(arr, index) {

    let result = arr.indexOf(index);
    if (result === -1) return "Немає такого елементу";
    return result;
}



// Написати функцію, що фільтрує дані з масиву. Перший аргументом приймає сам масив, другим – число.
// Пофільтрований масив повинен мати лише елементи, які більше за задане число (другий аргумент функції).
// let arr = [1,2,3,4,5,6,7,8,9];
// getFilteredArr(arr,3) => [4,5,6,7,8,9];


let arr3 = [1, 4, 3, 2, 5, 8, 7, 6, 9];

console.log(getFilteredArr(arr3, 3));

function getFilteredArr(arr, numberMin) {

    let arrSort = arr.sort();
    index = arr.indexOf(numberMin);

    let rez = arrSort.slice(index + 1);

    return rez;
}


// Написати функцію, яка приймає масив елементів та повертає масив, без елементів, що повторюються.
// let arr = [1,2,3,4,5,6,1,2,3];
// getUniqueArrItems(arr) => [4,5,6];

let arr4 = [1, 2, 3, 4, 5, 6, 1, 2, 3];

arr = arrSet(arr4);

console.log(arr4);

function arrSet(arr) {

    for (let index = 0; index < arr.length; index++) {
        for (let j = 0; j < arr.length; j++) {
            let a = arr.lastIndexOf(index);
            let b = arr.indexOf(index);

            if (a !== b) {
                arr.splice(a, 1);
                arr.splice(b, 1);
            }
        }
    }
    return arr;
}