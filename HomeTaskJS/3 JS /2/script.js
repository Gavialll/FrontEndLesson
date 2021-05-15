
// Завдання 2: Користувач вводить e-mail. Потрібно перевірити дані на правильність введення. 
// Правильно введений e-mail - це той, в якому міститься символ @. Крім того символ @ не може бути на початку тексту або в кінці.
// Приклад правильно введених даних:
// student@ukr.net
// Приклад не правильно введених даних:
// @student.ukr.net
// student.ukr.net@
// student.ukr.net

let str = prompt("Введіть Email");

if ((str.endsWith("@") || str.startsWith("@") === false) && (str.indexOf("@") !== -1)) {
    alert('Email Good');
}
else {
    alert('Email No');
}

// Завдання 3: 
// Людина вводить текст, в якому міститься слово html (html може зустрічатись в тексті декілька разів). 
// Потрібно, вивести в консолі загальну кількість слів html у введеному тексті.
// Приклад роботи:
// Користувач вводить: Text html javascript html css. 
// console.log виводить: 2.

let text = prompt("Введіть текст");

let arrText = text.split(" ");

let sum = 0;

for (let index = 0; index < arrText.length; index++) {
    if (arrText[index] === "html") {
        sum++;
    }
}

console.log(sum);





