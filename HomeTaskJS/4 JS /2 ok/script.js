//  1. Завдання на піднесення до степеня
// 	1) Порахувати додатню степінь.
// 	2) Порахувати нульову степінь.
// 	3) Порахувати від'ємну степінь.

let num = 5;

let a = num ** 2;
let b = num ** (-2);
let c = num ** 0;

console.log(a);
console.log(b);
console.log(c);

// 2.Завдання на перевірку віку
//   1) Якщо більше 18 тоді ("Доступ дозволено!").
//   2) Якщо менше 18 тоді ("Батьки довзолили?").
//   3) Так - ("Доступ дозволено!").
//   4) Ні - ("У доступі відмовлено!").

let age = prompt("Введіть вік");

if(age >= 18) age = "yes18";
if(age < 18) age = "no18";

switch (age) {
    case "no18":{
        alert("Батьки довзолили?");
        break;
    }
    case "yes18":{
        alert("Доступ дозволено!");
        break;
    }
    case "Так":{
        alert("Доступ дозволено!");
        break;
    }
    case "Ні":{
        alert("У доступі відмовлено!");
        break;
    }
}

// 3. Завдання написати функцію, яка приймає одне число і повертає true або false в залежності чи воно просте чи ні. 
// Просте число - число, яке ділиться лише на 1 та на самого себе (2, 3, 5, 7, 11, 13, 17)

alert(prost(88));

function prost(proste){
for (let i = 2; i < proste; i++) {
    if(proste % i === 0) {
        return false;
    }
}    
    return true;
}