let login = "Імя";
let pasword = "ЛОГОС";
let paswordPromt;

while(pasword !== paswordPromt){

let loginPromt = prompt("Введіть ЛОГІН");

if(loginPromt === login) {
    paswordPromt = prompt("Введіть PASWORD");
    
    if(paswordPromt === null) alert("Вхід скасовано");
    else if(paswordPromt !== pasword) alert("Пароль невірний")
}

else if (loginPromt === null) alert("Вхід скасовано");

else  alert("Я вас незнаю");

}

alert("Ласкаво просимо");

let Question1 = {
    question: 'В чем отличие между локальной и глобальной переменной?',
    a: [[" Отличий нет", 1],
     [" Локальные видны повсюду, глобальные только в функциях", 0],
     [" Глобальные можно переопределять, локальные нельзя", 0],
     [" Глобальные видны повсюду, локальные только в функциях", 1],
     [" Локальные можно переопределять, глобальные нельзя", 0]]
};

let Question2 = {
    question: 'Где можно использовать JavaScript?',
    a: [[" Мобильные приложения", 0],
     [" Можно во всех перечисленных", 1,],
     [" Веб-приложения", 0],
     [" Серверные приложения", 0],
     [" Прикладное программное обеспечение", 0]]
    };

let Question3 = {
    question: 'Где верно указано имя переменной?',
    a: [[" var 2num;", 0],
     [" ver num;", 0],
     [" var num", 0],
     [" var num-1;", 0],
     [" var num_1;", 1]]
    };    

let Question4 = {
    question: 'В чем разница между confirm и prompt?',
    a: [[" confirm вызывает диалоговое окно с полем для ввода, prompt - окно с подтверждением", 0],
     [" prompt вызывает диалоговое окно с полем для ввода, confirm - окно с подтверждением", 1],
     [" Они ничем не отличаются", 0]]
    }; 
    
let Question5 = {
    question: ' Что такое условный оператор?',
    a: [[" Конструкция, что выполняет код несколько раз", 0],
     [" Конструкция для создания определенной переменной", 0],
     [" Оператор сравнения значений", 1]]
    };     

let Question6 = {
    question: 'Какие значения можно хранить в переменных?',
    a: [[" Только числа и строки", 0],
     [" Строки, числа с точкой, простые числа и булевые выражения", 1],
     [" Строки, числа с точкой и простые числа", 0]]
    }; 
    
let Question7 = {
    question: 'Где верно указан запуск всплывающего окна?',
    a: [[" new alert ('Hi')", 0],
     [" info ('Hi')", 0],
     [" Нет верных вариантов", 0],
     [' alert ("Hi")', 1]]
    }; 
    
let Question8 = {
    question: 'Какая переменная записана неверно?',
    a: [[' var num = "STRING";', 0],
     [" var isDone = 0;", 0],
     [" var number = 12,5;", 1],
     [" var b = false;", 0]]
    };    

let Question9 = {
    question: 'Какие циклы есть в языке JavaScript?',
     a: [[" for, while, do while", 1],
     [" for, forMap, foreach, while", 0],
     [" for, forMap, foreach, while, do while", 0],
     [" for, while, do while, foreach", 0]]
    };
    
let Question10 = {
    question: 'Где верно указан вывод данных?',
    a: [[' documentWrite("Hello");', 0],
        [' print(Hello);', 0],
        [' prompt("Hello")', 0],
        [' write("Hello");', 0],
        [' console.log("Hello");', 1]
       ]
    }; 

 
let result = 0;
let index = 0;

let mas = [Question10, Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9]


quest(index);

for(let i = 0; i < mas[index].a.length; i++){
    run(mas[index].a[i]);
}
index++;

let button = document.querySelector('#button');

button.addEventListener('click', function() {

    let radios = document.querySelectorAll('input[type="radio"]');

    for (let radio of radios) {
		if (radio.checked) {
            result += parseInt(radio.value)
            console.log(result);

            var main_block = document.getElementById("test");
            var blocks = main_block.children;

            for (i = blocks.length - 1; i >= 0; i--) {
                main_block.removeChild(blocks[i]);
            }

            if(index !== mas.length){
                for(let i = 0; i < mas[index].a.length; i++){
                quest(index);
                run(mas[index].a[i]);
                }  
            }
            else{
                console.log('exit');
                questRezult();
                button.value = "Повтор";
                button.addEventListener('click', function() {
                document.location.href = "index.html";    
                });
            }
            index++;
        }
	}
});


function run(a){
     let div1 = document.createElement('div');
     div1.className = "alert";
     div1.innerHTML = a[0];
     div1.id = "del";
     test.append(div1);
     div1.insertAdjacentHTML('afterbegin', '<input type="radio" name="one" value="'+a[1]+'">');
}

function questRezult(){
    let div1 = document.createElement('div');
     div1.innerHTML = 'Ваш результат: ' + result + '/' + mas.length;
     div1.className = "info";
     div1.id = "question";
     question.replaceWith(div1);
}

function quest(index){
    let div1 = document.createElement('div');
     div1.innerHTML = mas[index].question;
     div1.className = "info";
     div1.id = "question";
     question.replaceWith(div1);
}