let colorBackground = prompt("Введіть фон сторінки");

let colorB = document.getElementById('colorBackground');
colorB.style.backgroundColor = colorBackground;


let fontWeigt = prompt("Виберіть тип шрифту \nbolder \nbold \nleghter ");

colorB.style.fontWeight = fontWeigt;


let text = prompt('Виберіть розміщення H1 \nrigth \nleft \ncenter');

let h = document.getElementById('h');
h.style.textAlign = text;


let text1 = prompt('Введіть фон для параграфа зі зсилками');

let colorLink = document.getElementById('link');
colorLink.style.backgroundColor = text1;


let div = prompt('Введіть колір, розмір, товщину тексту у елементі div');

let arrTxt = div.split(',');
let divStyle = document.getElementById('divStyle');
divStyle.style.color = arrTxt[0];
divStyle.style.fontSize = arrTxt[1];
divStyle.style.fontWeight = arrTxt[2];


let marker = prompt('тип маркера для маркованого списку на сторінц\n"disc" - чёрная точка\n"circle" - кружок с пустотой внутри\n"square" - чёрный квадрат');

let li = document.querySelector('ul');
li.setAttribute("type", marker);


let linkColor = prompt('Колір тексту у параграфі зі зсилками і для самих зсилок. \nПри чому колір тексту для зсилок призначити у циклі');

let iterator = document.getElementsByClassName('link').length;
for (let i = 0; i < iterator; i++) {
    let test = document.getElementsByClassName('link')[i];
    test.style.color = linkColor;
}


// Таким чином слід запропонувати користувачу ввести десять налаштувань сторінки і застосувати їх.<br />
// 	ДОДАТОК ДО ЗАВДАННЯ: замість зсилок на конкретні сайти, вивести у панелі навігації зсилки на три сайти, які
// 	вкаже користувач. <br />
// 	Наприклад користувач у віконце prompt() ввів адресу football24.ua - в такому разі треба створити зсилку, яка
// 	вела б на сайт football24, а текстом цієї зсилки (тим, по чому можна клікнути) буде також football24.ua
	
for (let j = 1; j <= 3; j++) {
    let txt = prompt('Введіть сайт N' + j);
    let adress = document.getElementsByClassName('link')[j]

    adress.setAttribute("href", txt);
}


